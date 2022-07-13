import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ApplicantType = {
  id: number;
  name: string;
  // 면접관
  // 기타 정보들
};

const applicantSlice = createSlice({
  name: "APPLICANT",
  // TODO: 지원자 상태 - 아니면 지원자들?
  initialState: {},
  reducers: {
    onRemove(state, action: PayloadAction<ApplicantType>) {},
  },
});

export default applicantSlice.reducer;
export const { onRemove } = applicantSlice.actions;
