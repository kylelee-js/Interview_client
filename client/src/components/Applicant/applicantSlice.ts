import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApplicantReviewDataType } from "./reviewSlice";

export type TagDataType = {
  id: number;
  tagText: string;
};

// FIXME: undefined 나중에 삭제하기
export type InterviewerDataType = {
  pk: number;
  email?: string;
  name?: string;
  nickname?: string;
  department?: string;
  image: string;
};

export type ApplicantDataType = {
  id: number;
  applicantName: string;
  birth?: string;
  tags?: TagDataType[];
  department: string;
  job: string;
  status: string;
  filePath?: string;
  isFailed?: boolean;
  board?: number[];
  interviewer?: InterviewerDataType[];
  isFixed?: boolean;
  order: number;
};

// 면접관 리뷰 정보
export type ApplicantType = {
  applicantInfo: ApplicantDataType | null;
  applicantReview: ApplicantReviewDataType | null;
};

// FIXME: 이니셜 상태 그냥 null로 구성하기!
const fakeApplicantData: ApplicantType = {
  applicantInfo: null,
  applicantReview: null,
};

const applicantSlice = createSlice({
  name: "APPLICANT",
  initialState: fakeApplicantData,
  reducers: {
    // FIXME: 이니셜 상태 수정 이후 코드 수정 요망!
    onSetState(state, action: PayloadAction<ApplicantDataType>) {
      state.applicantInfo = action.payload;
      return state;
    },
  },
});

export default applicantSlice.reducer;
export const { onSetState } = applicantSlice.actions;
