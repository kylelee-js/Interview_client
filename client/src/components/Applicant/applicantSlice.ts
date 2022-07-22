import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApplicantReviewDataType, ReviewDataType } from "./reviewSlice";

export type ApplicantDataType = {
  id: number;
  applicantName: string;
  birth?: string;
  tagNote?: string[] | [];
  department: string;
  job: string;
  status: string;
  filePath?: string;
  isFailed?: boolean;
  board?: number[];
  interviewer?: string[];
  isFixed?: boolean;
  order: number;
};

// 면접관 리뷰 정보
export type ApplicantType = {
  applicantInfo: ApplicantDataType;
  applicantReview: ApplicantReviewDataType;
};

// TODO: 각 지원자 데이터의 리뷰 정보를 initial state로 설정해준다.
const myPageBoards = ["미등록", "서류합격", "1차합격", "2차합격", "최종합격"];
const fakeApplicantData: ApplicantType[] = [
  {
    applicantInfo: {
      id: 0,
      applicantName: "string",
      birth: "string",
      tagNote: [],
      department: "string",
      job: "string",
      status: "string",
      filePath: "string",
      isFailed: false,
      board: [],
      interviewer: [],
      isFixed: false,
      order: 0,
    },
    applicantReview: {
      applicantId: 0,
      reviewData: [
        {
          applicantStatus: "1",
          statusReviewData: [
            // {
            //   userId: 999,
            //   userName: "면접관",
            //   userNickname: "구관",
            //   reviewText: "좀비월드",
            // },
            // {
            //   userId: 130,
            //   userName: "장규리",
            //   userNickname: "금발",
            //   reviewText: "사과",
            // },
          ],
        },
        {
          applicantStatus: "2",
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
          applicantStatus: "3",
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
    },
  },
];

const applicantSlice = createSlice({
  name: "APPLICANT",
  initialState: fakeApplicantData,
  reducers: {
    // onSetState(state, action: PayloadAction<ApplicantType>) {
    //   state = [action.payload];
    //   return state;
    // },
    onSetState(state, action: PayloadAction<ApplicantDataType>) {
      state[0].applicantInfo = action.payload;
      return state;
    },
  },
});

export default applicantSlice.reducer;
export const { onSetState } = applicantSlice.actions;
