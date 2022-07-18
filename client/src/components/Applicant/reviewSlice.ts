import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 면접관 리뷰 정보
export type ReviewDataType = {
  id: number | null;
  name: string | null;
  review: string;
};

// TODO: 각 지원자 데이터의 리뷰 정보를 initial state로 설정해준다.

const fakeReviewDate: ReviewDataType[] = [
  {
    id: 12,
    name: "신짱구",
    review: "ㅋㅋㅋ",
  },
  // {
  //   id: 0,
  //   name: "김철수",
  //   review: "수정요망",
  // },
  {
    id: 10,
    name: "김유리",
    review: "아래 리뷰",
  },
];

const reviewSlice = createSlice({
  name: "REVIEW",
  initialState: fakeReviewDate,
  reducers: {
    onReview(state, action: PayloadAction<ReviewDataType>) {
      state.push(action.payload);
    },
    onRemove(state, action: PayloadAction<{ id: number }>) {
      const editReviewIndex = state.findIndex(
        (review) => review.id == action.payload.id
      );
      state.splice(editReviewIndex, 1);
    },
    onEdit(state, action: PayloadAction<ReviewDataType>) {
      const editReviewIndex = state.findIndex(
        (review) => review.id == action.payload.id
      );
      state.splice(editReviewIndex, 1);
      state.splice(editReviewIndex, 0, action.payload);
    },
  },
});

export default reviewSlice.reducer;
export const { onRemove, onReview, onEdit } = reviewSlice.actions;
