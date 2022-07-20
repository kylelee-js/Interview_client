import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../../store";
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
  order?: number;
};

// 면접관 리뷰 정보
export type ApplicantType = {
  applicantInfo: ApplicantDataType;
  applicantReview: ApplicantReviewDataType;
};

// TODO: 각 지원자 데이터의 리뷰 정보를 initial state로 설정해준다.

const fakeApplicantData: ApplicantType[] = [
  {
    applicantInfo: {
      id: 0,
      applicantName: "Kyle Lee",
      // date: new Date(),
      tagNote: ["#asd", "#qwe"],
      department: "개발",
      job: "QA",
      status: "0",
    },
    applicantReview: {
      applicantId: 0,
      reviewData: [
        {
          applicantStatus: "0",
          statusReviewData: [
            {
              userId: 999,
              userName: "면접관",
              userNickname: "엄격",
              reviewText: "ㅋㅋㅋ",
            },
            {
              userId: 13,
              userName: "삼짱구",
              userNickname: "짱아",
              reviewText: "ㄸㄸㄸㄸ",
            },
          ],
        },
        {
          applicantStatus: "1",
          statusReviewData: [
            {
              userId: 102,
              userName: "김유리",
              userNickname: "공주",
              reviewText: "1차합격 축하",
            },
            {
              userId: 103,
              userName: "백범구",
              userNickname: "강약",
              reviewText: "그렇군",
            },
          ],
        },
        {
          applicantStatus: "2",
          statusReviewData: [
            {
              userId: 120,
              userName: "윤귀남",
              userNickname: "좀비",
              reviewText: "좀비월드",
            },
            {
              userId: 130,
              userName: "장규리",
              userNickname: "귤이",
              reviewText: "사과",
            },
          ],
        },
      ],
    },
  },
  {
    applicantInfo: {
      id: 1,
      applicantName: "David Kim",
      // date: new Date(),
      tagNote: ["#zxc", "#hfdghsd"],
      department: "개발",
      job: "데브옵스",
      status: "0",
    },
    applicantReview: {
      applicantId: 1,
      reviewData: [
        {
          applicantStatus: "0",
          statusReviewData: [
            {
              userId: 12,
              userName: "신짱구",
              userNickname: "부리",
              reviewText: "ㅋㅋㅋ",
            },
            {
              userId: 13,
              userName: "삼짱구",
              userNickname: "짱아",
              reviewText: "ㄸㄸㄸㄸ",
            },
          ],
        },
        {
          applicantStatus: "1",
          statusReviewData: [
            {
              userId: 102,
              userName: "김유리",
              userNickname: "공주",
              reviewText: "1차합격 축하",
            },
            {
              userId: 103,
              userName: "백범구",
              userNickname: "강약",
              reviewText: "그렇군",
            },
          ],
        },
        {
          applicantStatus: "2",
          statusReviewData: [
            {
              userId: 120,
              userName: "윤귀남",
              userNickname: "좀비",
              reviewText: "좀비월드",
            },
            {
              userId: 130,
              userName: "장규리",
              userNickname: "귤이",
              reviewText: "사과",
            },
          ],
        },
      ],
    },
  },
  {
    applicantInfo: {
      id: 2,
      applicantName: "Paul Shelby",
      // date: new Date(),
      tagNote: ["#zxcxcc", "#q2123"],
      department: "개발",
      job: "기획",
      status: "0",
    },
    applicantReview: {
      applicantId: 2,
      reviewData: [
        {
          applicantStatus: "0",
          statusReviewData: [
            {
              userId: 12,
              userName: "신짱구",
              userNickname: "부리",
              reviewText: "ㅋㅋㅋ",
            },
            {
              userId: 13,
              userName: "삼짱구",
              userNickname: "짱아",
              reviewText: "ㄸㄸㄸㄸ",
            },
          ],
        },
        {
          applicantStatus: "1",
          statusReviewData: [
            {
              userId: 102,
              userName: "김유리",
              userNickname: "공주",
              reviewText: "1차합격 축하",
            },
            {
              userId: 103,
              userName: "백범구",
              userNickname: "강약",
              reviewText: "그렇군",
            },
          ],
        },
        {
          applicantStatus: "2",
          statusReviewData: [
            {
              userId: 120,
              userName: "윤귀남",
              userNickname: "좀비",
              reviewText: "좀비월드",
            },
            {
              userId: 130,
              userName: "장규리",
              userNickname: "귤이",
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
