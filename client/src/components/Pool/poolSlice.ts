import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApplicantDataType } from "../Applicant/applicantSlice";
import { ApplicantBoardType } from "../KanBanBoard/kanbanSlice";

type ApplicantActionType = {
  status: string;
  // FIXME: 일단은 인덱스로 -> 나중에 고유 식별 값으로 교체 (applicantId)
  applicantIndex: number;
};
const myPageBoards = ["미등록", "서류합격", "1차합격", "2차합격", "최종합격"];
// 칸반보드 객체 배열
const fakeBoards: ApplicantBoardType[] | null = [];

const poolSlice = createSlice({
  name: "POOL_BOARD",
  // TODO: 지원자 상태에서 불러와서 칸반 보드를 형성해야함!
  initialState: fakeBoards,
  reducers: {
    onSetPool(state, action) {
      state = action.payload;
      return state;
    },
    onSetMyApplicant(state, action) {
      const { boardStatus, applicantIndex, userPk } = action.payload;
      const applicantList = [...state[+boardStatus - 1].applicants];
      applicantList[applicantIndex].interviewer?.push(userPk);
      state[+boardStatus - 1].applicants = applicantList;
      return state;
    },
    onUnsetMyApplicant(state, action) {
      const { boardStatus, applicantIndex, userPk } = action.payload;
      const applicantList = [...state[+boardStatus - 1].applicants];
      const userIndex = applicantList[applicantIndex].interviewer?.findIndex(
        (viewer) => viewer == userPk
      );
      applicantList[applicantIndex].interviewer?.splice(userIndex!, 1);
      state[+boardStatus - 1].applicants = applicantList;
      return state;
    },
  },
});

export default poolSlice.reducer;
export const { onSetPool, onSetMyApplicant, onUnsetMyApplicant } =
  poolSlice.actions;
