import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ApplicantType = {
  id: number;
  name: string;
  // 면접관 리뷰 정보
  review: string;
};

const fakeDate: ApplicantType = {
  id: 123,
  name: "김철수",
  // 면접관 리뷰 정보
  review: "",
};

const applicantSlice = createSlice({
  name: "APPLICANT",
  // TODO: 지원자 상태 - 아니면 지원자들?
  initialState: fakeDate,
  reducers: {
    onReview(state, action: PayloadAction<ApplicantType>) {
      state.review = action.payload.review;
    },
    onRemove(state, action: PayloadAction<ApplicantType>) {},
  },
});

export default applicantSlice.reducer;
export const { onRemove, onReview } = applicantSlice.actions;
