import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { reviewApi } from "../../api/reviewApi";

export type StatusReviewDataType = {
  id: string;
  userId: number | null;
  userName: string | null;
  userNickname: string | null;
  reviewText: string;
};

export type ReviewDataType = {
  // 사실상 배열 인덱스
  applicantStatus: number;
  statusReviewData: StatusReviewDataType[];
};

export type ApplicantReviewDataType = {
  applicantId: number;
  reviewData: ReviewDataType[];
};

type ReviewDataActionType = {
  applicantStatus: number;
  statusReviewData: StatusReviewDataType;
};

export const fetchReviewData = createAsyncThunk(
  "FETCH_REVIEW_DATA",
  async (id: string) => {
    const res = await reviewApi.fetchReviewById(id);
    const applicantReviewData: ApplicantReviewDataType = {
      applicantId: +id,
      reviewData: res.reviewData,
    };
    return applicantReviewData;
  }
);

// TODO: 이니셜 상태 null로 만들기
const fakeReviewDate: ApplicantReviewDataType | null = {
  applicantId: 0,
  reviewData: [
    {
      applicantStatus: 1,
      statusReviewData: [],
    },
    {
      applicantStatus: 2,
      statusReviewData: [
        {
          id: "1",
          userId: 120,
          userName: "윤귀남",
          userNickname: "좀비",
          reviewText: "좀비월드",
        },
        {
          id: "2",
          userId: 1300,
          userName: "송하영",
          userNickname: "광주",
          reviewText: "배",
        },
      ],
    },
    {
      applicantStatus: 3,
      statusReviewData: [
        {
          id: "3",
          userId: 999,
          userName: "면접관",
          userNickname: "구관",
          reviewText: "좀비월드",
        },
        {
          id: "4",
          userId: 130,
          userName: "장규리",
          userNickname: "금발",
          reviewText: "사과",
        },
      ],
    },
  ],
};

const reviewSlice = createSlice({
  name: "REVIEW",
  initialState: fakeReviewDate,
  reducers: {
    onReview(state, action: PayloadAction<ReviewDataActionType>) {
      const { applicantStatus, statusReviewData } = action.payload;
      state.reviewData[+applicantStatus - 1].statusReviewData.push(
        statusReviewData
      );
      return state;
    },
    onRemove(state, action: PayloadAction<{ status: string; id: number }>) {
      const { status, id } = action.payload;
      const editReviewIndex = state.reviewData[
        +status - 1
      ].statusReviewData.findIndex((review) => review.userId == id);
      state.reviewData[+status - 1].statusReviewData.splice(editReviewIndex, 1);
      return state;
    },
    onEdit(state, action: PayloadAction<ReviewDataActionType>) {
      // TODO: findIndex 한번더?
      const { applicantStatus, statusReviewData } = action.payload;
      const editReviewIndex = state.reviewData[
        +applicantStatus - 1
      ].statusReviewData.findIndex(
        (review) => review.userId == statusReviewData.userId
      );
      state.reviewData[+applicantStatus - 1].statusReviewData.splice(
        editReviewIndex,
        1
      );
      state.reviewData[+applicantStatus - 1].statusReviewData.splice(
        editReviewIndex,
        0,
        statusReviewData
      );
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchReviewData.fulfilled,
      (state, action: PayloadAction<ApplicantReviewDataType>) => {
        state = action.payload;
        return state;
      }
    );
  },
});

export default reviewSlice.reducer;
export const { onRemove, onReview, onEdit } = reviewSlice.actions;
