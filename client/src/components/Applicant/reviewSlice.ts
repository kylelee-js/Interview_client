import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 면접관 리뷰 정보
type ReviewDataType = {
  id: number;
  name: string;
  review: string;
};

const fakeReviewDate: ReviewDataType[] = [
  {
    id: 0,
    name: "김철수",
    review: "",
  },
];

const reviewSlice = createSlice({
  name: "REVIEW",
  initialState: fakeReviewDate,
  reducers: {
    onReview(state, action: PayloadAction<ReviewDataType>) {
      state.push(action.payload);
    },
    onRemove(state, action: PayloadAction<ReviewDataType>) {},
    onEdit(state, action: PayloadAction<ReviewDataType>) {},
  },
});

export default reviewSlice.reducer;
export const { onRemove, onReview, onEdit } = reviewSlice.actions;
