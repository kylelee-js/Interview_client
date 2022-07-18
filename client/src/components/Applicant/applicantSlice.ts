import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../../store";
import { ReviewDataType } from "./reviewSlice";

export type ApplicantDataType = {
  id: number;
  name: string;
  tagNote: string[] | [];
  status: string;
  isFailed?: boolean;
  isFixed?: boolean;
};

// 면접관 리뷰 정보
export type ApplicantType = {
  applicant: ApplicantDataType;
  review: ReviewDataType;
};

// TODO: 각 지원자 데이터의 리뷰 정보를 initial state로 설정해준다.
//  지금은 칸반에서 불러오고 있지만... -> 나중에는 api로 가져와야한다.
const applicant = useAppSelector((state) => state.kanban);
const review = useAppSelector((state) => state.review);

const fakeApplicantData: ApplicantType[] = [
  {
    applicant: applicant[0].contents[0],
    review: review[0],
  },
];

const applicantSlice = createSlice({
  name: "APPLICANT",
  initialState: fakeApplicantData,
  reducers: {
    onReview(state, action: PayloadAction<ApplicantType>) {
      state.push(action.payload);
    },
  },
});

export default applicantSlice.reducer;
export const {} = applicantSlice.actions;
