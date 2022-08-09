import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { onFetchAllApplicants } from "../../api/applicantApi";
import { ApplicantDataType } from "../Applicant/applicantSlice";
import { CardCoordinateType } from "./Kanban";

export type ApplicantBoardType = {
  pk: number;
  boardStatus: number;
  boardName: string;
  applicants: ApplicantDataType[];
};

export type ApplicantActionType = {
  status: string;
  // FIXME: 일단은 인덱스로 -> 나중에 고유 식별 값으로 교체 (applicantId)
  applicantIndex: number;
  isFailed: boolean;
  isFixed: boolean;
};

const fakeBoards: ApplicantBoardType[] | null = [];

export const fetchKanbanBoard = createAsyncThunk(
  "FETCH_KANBAN_BOARD",
  async () => {
    const kanbanBoardData = await onFetchAllApplicants();
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
    onToggleRemoveApplicant(state, action: PayloadAction<ApplicantActionType>) {
      const { status, applicantIndex, isFailed } = action.payload;
      const applicantList = [...state[+status].applicants];
      applicantList[applicantIndex].isFailed = !isFailed;
      applicantList[applicantIndex].isFixed = !isFailed;
      state[+status].applicants = applicantList;
      return state;
    },
    onToggleFixApplicant(state, action: PayloadAction<ApplicantActionType>) {
      const { status, applicantIndex, isFixed } = action.payload;
      const applicantList = [...state[+status].applicants];
      applicantList[applicantIndex].isFixed = !isFixed;
      state[+status].applicants = applicantList;
      return state;
    },
    onTagWrite(state, action) {
      const { boardStatus, applicantIndex, tagId, tagText } = action.payload;
      const targetApplicant =
        state[+boardStatus - 1].applicants[applicantIndex];
      if (targetApplicant.tags) {
        targetApplicant.tags?.push({ id: tagId, tagText: tagText });
        state[+boardStatus - 1].applicants[applicantIndex] = targetApplicant;
        return state;
      } else {
        targetApplicant.tags = [{ id: tagId, tagText: tagText }];
        state[+boardStatus - 1].applicants[applicantIndex] = targetApplicant;
        return state;
      }
    },
    onTagDelete(state, action) {
      const { boardStatus, applicantIndex, tagId } = action.payload;
      const targetApplicant =
        state[+boardStatus - 1].applicants[applicantIndex];
      const targetTagIndex = targetApplicant.tags?.findIndex(
        (tag) => tag.id == tagId
      );
      targetApplicant.tags?.splice(targetTagIndex!, 1);
      state[+boardStatus - 1].applicants[applicantIndex] = targetApplicant;
      return state;
    },
    onDateUpdate(state, action) {
      const { boardStatus, applicantIndex, interviewDate } = action.payload;
      const targetApplicant =
        state[+boardStatus - 1].applicants[applicantIndex];
      targetApplicant.interviewDate = interviewDate;
      state[+boardStatus - 1].applicants[applicantIndex] = targetApplicant;
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
  onInBoardDrag,
  onCrossBoardDrag,
  onToggleRemoveApplicant,
  onToggleFixApplicant,
  onTagWrite,
  onTagDelete,
  onDateUpdate,
} = kanbanSlice.actions;
