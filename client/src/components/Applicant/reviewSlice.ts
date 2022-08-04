import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { reviewApi } from "../../api/reviewApi";
import { UserState } from "../Login/authSlice";

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

// 액션 타입 설정
type DeleteReviewDataActionType = {
  status: string;
  id: string;
  userId: number;
};
type ReviewDataActionType = {
  applicantStatus: number;
  applicantId: number;
  reviewText: string;
  id: string;
  user: UserState;
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
export const writeReviewData = createAsyncThunk(
  "WRITE_REVIEW_DATA",
  async ({
    applicantStatus,
    user,
    reviewText,
    applicantId,
  }: ReviewDataActionType) => {
    const { id } = await reviewApi.onWriteReview({
      applicantStatus: applicantStatus,
      applicantId: applicantId,
      reviewText: reviewText,
    });
    return {
      applicantStatus: applicantStatus,
      statusReviewData: {
        id: id!,
        userId: user.pk,
        userName: user.name,
        userNickname: user.nickname,
        reviewText: reviewText,
      },
    };
  }
);
export const editReviewData = createAsyncThunk(
  "EDIT_REVIEW_DATA",
  async ({
    applicantStatus,
    id,
    user,
    reviewText,
    applicantId,
  }: ReviewDataActionType) => {
    await reviewApi.onEditReview("" + id!, {
      applicantStatus: applicantStatus,
      applicantId: applicantId,
      reviewText: reviewText,
    });
    return {
      applicantStatus: applicantStatus,
      statusReviewData: {
        id: id!,
        userId: user.pk,
        userName: user.name,
        userNickname: user.nickname,
        reviewText: reviewText,
      },
    };
  }
);
export const deleteReviewData = createAsyncThunk(
  "DELETE_REVIEW_DATA",
  async ({ status, id, userId }: DeleteReviewDataActionType) => {
    await reviewApi.onDeleteReview(id);
    return { status, id, userId };
  }
);

const fakeReviewDate: ApplicantReviewDataType | null = {
  applicantId: 0,
  reviewData: [],
};

const reviewSlice = createSlice({
  name: "REVIEW",
  initialState: fakeReviewDate,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchReviewData.fulfilled,
      (state, action: PayloadAction<ApplicantReviewDataType>) => {
        state = action.payload;
        return state;
      }
    );
    builder.addCase(writeReviewData.fulfilled, (state, action) => {
      const { applicantStatus, statusReviewData } = action.payload;
      state.reviewData[+applicantStatus - 1].statusReviewData.push(
        statusReviewData
      );
      return state;
    });
    builder.addCase(editReviewData.fulfilled, (state, action) => {
      const { applicantStatus, statusReviewData } = action.payload;
      const targetReview =
        state.reviewData[+applicantStatus - 1].statusReviewData;
      const editReviewIndex = targetReview.findIndex(
        (review) => review.userId == statusReviewData.userId
      );
      targetReview.splice(editReviewIndex, 1);
      targetReview.splice(editReviewIndex, 0, statusReviewData);
      state.reviewData[+applicantStatus - 1].statusReviewData = targetReview;
      return state;
    });
    builder.addCase(deleteReviewData.fulfilled, (state, action) => {
      const { status, userId } = action.payload;
      const editReviewIndex = state.reviewData[
        +status - 1
      ].statusReviewData.findIndex((review) => review.userId == userId);
      state.reviewData[+status - 1].statusReviewData.splice(editReviewIndex, 1);
      return state;
    });
  },
});

export default reviewSlice.reducer;
export const {} = reviewSlice.actions;
