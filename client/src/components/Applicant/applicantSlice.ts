import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { onFetchApplicantById } from "../../api/applicantApi";
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

export type fileDataType = {
  id: number;
  file: string;
  applicant: number;
};

export type ApplicantDataType = {
  id: number;
  applicantName: string;
  birth?: string;
  tags?: TagDataType[];
  department: string;
  job: string;
  status: string;
  file?: fileDataType[];
  isFailed?: boolean;
  board?: number[];
  interviewer?: InterviewerDataType[];
  isFixed?: boolean;
  order?: number;
  interviewDate?: string | null;
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

export const fetchApplicant = createAsyncThunk(
  "FETCH_APPLICANT",
  async (id: string) => {
    const applicantData = await onFetchApplicantById(id);
    return applicantData;
  }
);
const applicantSlice = createSlice({
  name: "APPLICANT",
  initialState: fakeApplicantData,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchApplicant.fulfilled,
      (state, action: PayloadAction<ApplicantDataType>) => {
        state.applicantInfo = action.payload;
        return state;
      }
    );
  },
});

export default applicantSlice.reducer;
export const {} = applicantSlice.actions;
