import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchApplicants } from "../../api/fetchApplicant";
import { ApplicantDataType } from "../Applicant/applicantSlice";
import { CardCoordinateType } from "./Kanban";

export type ApplicantBoardType = {
  pk: number;
  boardStatus: number;
  boardName: string;
  applicants: ApplicantDataType[];
};

type ApplicantActionType = {
  status: string;
  // FIXME: 일단은 인덱스로 -> 나중에 고유 식별 값으로 교체 (applicantId)
  applicantIndex: number;
};

const fakeBoards: ApplicantBoardType[] | null = [];

export const fetchKanbanBoard = createAsyncThunk(
  "FETCH_KANBAN_BOARD",
  async () => {
    const kanbanBoardData = await fetchApplicants();
    return kanbanBoardData;
  }
);

const kanbanSlice = createSlice({
  name: "KANBAN_BOARDS",
  // TODO: 지원자 상태에서 불러와서 칸반 보드를 형성해야함!
  initialState: fakeBoards,
  reducers: {
    onInBoardDrag(state, action: PayloadAction<CardCoordinateType>) {
      const { destId, sourceId, destIndex, sourceIndex } = action.payload;
      const sourceBoard = state[+sourceId - 1].applicants;
      const sourceCard = sourceBoard[+sourceIndex];
      sourceBoard.splice(sourceIndex, 1);
      sourceBoard.splice(destIndex, 0, sourceCard);
      sourceBoard.forEach((card, index) => (card.order = index));
      state[+sourceId - 1].applicants = sourceBoard;
      return state;
    },
    onCrossBoardDrag(state, action: PayloadAction<CardCoordinateType>) {
      const { destId, sourceId, destIndex, sourceIndex } = action.payload;
      const destinationBoard = [...state[+destId - 1].applicants];
      const sourceBoard = [...state[+sourceId - 1].applicants];
      const sourceCard = sourceBoard[sourceIndex];
      // 채용상태 변경 -> 보드이름으로? 채용상태 테이블 따로?
      sourceCard.status = "" + state[+destId - 1].boardStatus;
      sourceBoard.splice(sourceIndex, 1);
      destinationBoard.splice(destIndex, 0, sourceCard);
      sourceBoard.forEach((card, index) => (card.order = index));
      destinationBoard.forEach((card, index) => (card.order = index));
      state[+destId - 1].applicants = destinationBoard;
      state[+sourceId - 1].applicants = sourceBoard;
      return state;
    },
    // TODO: Id, Index 교체 수정 !!!!!!
    onRemoveApplicant(state, action: PayloadAction<ApplicantActionType>) {
      // TODO: action payload는 지원자의 상태(보드 아이디)와 지원자 고유식별 값(개인 아이디 or 배열 인덱스)를 담아야함
      const { status, applicantIndex } = action.payload;
      const applicantList = [...state[+status].applicants];
      // applicantList.splice(applicantIndex, 1);
      applicantList[applicantIndex].isFailed = true;
      applicantList[applicantIndex].isFixed = true;
      state[+status].applicants = applicantList;
      return state;
    },
    onRollbackApplicant(state, action: PayloadAction<ApplicantActionType>) {
      // TODO: action payload는 지원자의 상태(보드 아이디)와 지원자 고유식별 값(개인 아이디 or 배열 인덱스)를 담아야함
      const { status, applicantIndex } = action.payload;
      const applicantList = [...state[+status].applicants];
      // applicantList.splice(applicantIndex, 1);
      applicantList[applicantIndex].isFailed = false;
      applicantList[applicantIndex].isFixed = false;
      state[+status].applicants = applicantList;
      return state;
    },
    onFixApplicant(state, action: PayloadAction<ApplicantActionType>) {
      // TODO: action payload는 지원자의 상태(보드 아이디)와 지원자 고유식별 값(개인 아이디 or 배열 인덱스)를 담아야함
      const { status, applicantIndex } = action.payload;
      const applicantList = [...state[+status].applicants];
      // applicantList.splice(applicantIndex, 1);
      applicantList[applicantIndex].isFixed = true;
      state[+status].applicants = applicantList;
      return state;
    },
    onUnfixApplicant(state, action: PayloadAction<ApplicantActionType>) {
      // TODO: action payload는 지원자의 상태(보드 아이디)와 지원자 고유식별 값(개인 아이디 or 배열 인덱스)를 담아야함
      const { status, applicantIndex } = action.payload;
      const applicantList = [...state[+status].applicants];
      // applicantList.splice(applicantIndex, 1);
      applicantList[applicantIndex].isFixed = false;
      state[+status].applicants = applicantList;
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
  extraReducers: (builder) => {
    builder.addCase(fetchKanbanBoard.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export default kanbanSlice.reducer;
export const {
  // onSetKanban,
  onInBoardDrag,
  onCrossBoardDrag,
  onRemoveApplicant,
  onRollbackApplicant,
  onFixApplicant,
  onUnfixApplicant,
  onSetMyApplicant,
  onUnsetMyApplicant,
} = kanbanSlice.actions;
