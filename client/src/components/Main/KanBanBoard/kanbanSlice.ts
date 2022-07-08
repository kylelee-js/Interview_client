import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardCoordinateType } from "./Kanban";

type ApplicantCard = {
  id: number;
  name: string;
  // date: Date;
  tagNote: string[] | [];

  // FIXME: 사실상 이 보드가 현재 채용 상태가 될 것이다.
  boardId: number;
};

type ApplicantBoard = {
  boardId: number;
  contents: ApplicantCard[];
};

const fakeBoard: ApplicantCard[] = [
  {
    id: 0,
    name: "Kyle",
    // date: new Date(),
    tagNote: ["#asd", "#qwe"],
    boardId: 0,
  },
  {
    id: 1,
    name: "David",
    // date: new Date(),
    tagNote: ["#zxc", "#hfdghsd"],
    boardId: 0,
  },
  {
    id: 2,
    name: "Paul",
    // date: new Date(),
    tagNote: ["#zxcxcc", "#q2123"],
    boardId: 0,
  },
  {
    id: 3,
    name: "Susan",
    // date: new Date(),
    tagNote: ["#zxcvvd", "#fasdf"],
    boardId: 0,
  },
];

const kanbanSlice = createSlice({
  name: "KANBAN_CARD",
  initialState: fakeBoard,
  reducers: {
    onCardDrag(state, action: PayloadAction<CardCoordinateType>) {
      const { destId, sourceId, destIndex, sourceIndex } = action.payload;
      const fakeState = [...state];
      const fakeCard = fakeState[+sourceIndex];
      fakeState.splice(sourceIndex, 1);
      fakeState.splice(destIndex, 0, fakeCard);
      return [...fakeState];
    },
    onBoardDrag(state) {},
  },
});

export default kanbanSlice.reducer;
export const { onCardDrag, onBoardDrag } = kanbanSlice.actions;
