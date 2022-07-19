import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../../store";

// 면접관 리뷰 정보

export type StatusReviewDataType = {
  userId: number | null;
  userName: string | null;
  userNickname: string | null;
  reviewText: string;
};

export type ReviewDataType = {
  // 사실상 배열 인덱스
  applicantStatus: string;
  statusReviewData: StatusReviewDataType[];
};

export type ApplicantReviewDataType = {
  applicantId: number;
  reviewData: ReviewDataType[];
};

type ReviewDataActionType = {
  applicantStatus: string;
  statusReviewData: StatusReviewDataType;
};

// TODO: 각 지원자 데이터의 리뷰 정보를 initial state로 설정해준다.

const fakeReviewDate: ApplicantReviewDataType = {
  applicantId: 0,
  reviewData: [
    {
      applicantStatus: "0",
      statusReviewData: [
        {
          userId: 999,
          userName: "면접관",
          userNickname: "구관",
          reviewText: "좀비월드",
        },
        {
          userId: 130,
          userName: "장규리",
          userNickname: "금발",
          reviewText: "사과",
        },
      ],
    },
    {
      applicantStatus: "1",
      statusReviewData: [
        {
          userId: 120,
          userName: "윤귀남",
          userNickname: "좀비",
          reviewText: "좀비월드",
        },
        {
          userId: 1300,
          userName: "송하영",
          userNickname: "광주",
          reviewText: "배",
        },
      ],
    },
  ],
};
const reviewSlice = createSlice({
  name: "REVIEW",
  initialState: fakeReviewDate,
  reducers: {
    onInit(state, action: PayloadAction<ApplicantReviewDataType>) {
      state = action.payload;
      return state;
    },
    onReview(state, action: PayloadAction<ReviewDataActionType>) {
      const { applicantStatus, statusReviewData } = action.payload;
      state.reviewData[+applicantStatus].statusReviewData.push(
        statusReviewData
      );
      return state;
    },
    onRemove(state, action: PayloadAction<{ status: string; id: number }>) {
      const { status, id } = action.payload;
      const editReviewIndex = state.reviewData[
        +status
      ].statusReviewData.findIndex((review) => review.userId == id);
      state.reviewData[+status].statusReviewData.splice(editReviewIndex, 1);
      return state;
    },
    onEdit(state, action: PayloadAction<ReviewDataActionType>) {
      // TODO: findIndex 한번더?
      const { applicantStatus, statusReviewData } = action.payload;
      const editReviewIndex = state.reviewData[
        +applicantStatus
      ].statusReviewData.findIndex(
        (review) => review.userId == statusReviewData.userId
      );
      state.reviewData[+applicantStatus].statusReviewData.splice(
        editReviewIndex,
        1
      );
      state.reviewData[+applicantStatus].statusReviewData.splice(
        editReviewIndex,
        0,
        statusReviewData
      );
      return state;
    },
  },
});

export default reviewSlice.reducer;
export const { onInit, onRemove, onReview, onEdit } = reviewSlice.actions;
