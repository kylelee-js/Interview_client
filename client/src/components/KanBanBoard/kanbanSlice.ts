import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardCoordinateType } from "./Kanban";

export type ApplicantCardType = {
  id: number;
  name: string;
  tagNote: string[] | [];
  status: string;
};

export type ApplicantBoardType = {
  boardId: number;
  boardName: string;
  contents: ApplicantCardType[];
};

type ApplicantRemoveActionType = {
  status: string;
  // FIXME: 일단은 인덱스로 -> 나중에 고유 식별 값으로 교체 (applicantId)
  applicantIndex: number;
};

// 칸반보드 객체 배열
const fakeBoards: ApplicantBoardType[] = [
  {
    boardId: 0,
    boardName: "서류합격",
    contents: [
      {
        id: 0,
        name: "Kyle",
        // date: new Date(),
        tagNote: ["#asd", "#qwe"],
        status: "0",
      },
      {
        id: 1,
        name: "David",
        // date: new Date(),
        tagNote: ["#zxc", "#hfdghsd"],
        status: "0",
      },
      {
        id: 2,
        name: "Paul",
        // date: new Date(),
        tagNote: ["#zxcxcc", "#q2123"],
        status: "0",
      },
      {
        id: 3,
        name: "Susan",
        // date: new Date(),
        tagNote: ["#zxcvvd", "#fasdf"],
        status: "0",
      },
    ],
  },
  {
    boardId: 1,
    boardName: "1차합격",
    contents: [
      {
        id: 0,
        name: "철수",
        // date: new Date(),
        tagNote: ["#asd", "#qwe"],
        status: "1",
      },
      {
        id: 1,
        name: "영희",
        // date: new Date(),
        tagNote: ["#zxc", "#hfdghsd"],
        status: "1",
      },
      {
        id: 2,
        name: "맹구",
        // date: new Date(),
        tagNote: ["#zxcxcc", "#q2123"],
        status: "1",
      },
      {
        id: 3,
        name: "훈이",
        // date: new Date(),
        tagNote: ["#zxcvvd", "#fasdf"],
        status: "1",
      },
    ],
  },
  {
    boardId: 2,
    boardName: "2차합격",
    contents: [
      {
        id: 0,
        name: "레드",
        // date: new Date(),
        tagNote: ["#asd", "#qwe"],
        status: "2",
      },
      {
        id: 1,
        name: "블루",
        // date: new Date(),
        tagNote: ["#zxc", "#hfdghsd"],
        status: "2",
      },
      {
        id: 2,
        name: "그린",
        // date: new Date(),
        tagNote: ["#zxcxcc", "#q2123"],
        status: "2",
      },
      {
        id: 3,
        name: "핑크",
        // date: new Date(),
        tagNote: ["#zxcvvd", "#fasdf"],
        status: "2",
      },
    ],
  },
  {
    boardId: 3,
    boardName: "최종합격",
    contents: [
      {
        id: 0,
        name: "애플",
        // date: new Date(),
        tagNote: ["#asd", "#qwe"],
        status: "3",
      },
      {
        id: 1,
        name: "삼성",
        // date: new Date(),
        tagNote: ["#zxc", "#hfdghsd"],
        status: "3",
      },
      {
        id: 2,
        name: "LG",
        // date: new Date(),
        tagNote: ["#zxcxcc", "#q2123"],
        status: "3",
      },
      {
        id: 3,
        name: "구글",
        // date: new Date(),
        tagNote: ["#zxcvvd", "#fasdf"],
        status: "3",
      },
    ],
  },
];

const kanbanSlice = createSlice({
  name: "KANBAN_BOARDS",
  // TODO: 지원자 상태에서 불러와서 칸반 보드를 형성해야함!
  initialState: fakeBoards,
  reducers: {
    onInBoardDrag(state, action: PayloadAction<CardCoordinateType>) {
      const { destId, sourceId, destIndex, sourceIndex } = action.payload;
      const sourceBoard = state[+sourceId].contents;
      const sourceCard = sourceBoard[+sourceIndex];
      sourceBoard.splice(sourceIndex, 1);
      sourceBoard.splice(destIndex, 0, sourceCard);
      state[+sourceId].contents = sourceBoard;
      return state;
    },
    onCrossBoardDrag(state, action: PayloadAction<CardCoordinateType>) {
      const { destId, sourceId, destIndex, sourceIndex } = action.payload;
      const destinationBoard = [...state[+destId].contents];
      const sourceBoard = [...state[+sourceId].contents];
      const sourceCard = sourceBoard[sourceIndex];
      // 채용상태 변경 -> 보드이름으로? 채용상태 테이블 따로?
      sourceCard.status = "" + state[+destId].boardId;
      sourceBoard.splice(sourceIndex, 1);
      destinationBoard.splice(destIndex, 0, sourceCard);
      state[+destId].contents = destinationBoard;
      state[+sourceId].contents = sourceBoard;
      return state;
    },
    onRemoveApplicant(state, action: PayloadAction<ApplicantRemoveActionType>) {
      // TODO: action payload는 지원자의 상태(보드 아이디)와 지원자 고유식별 값(개인 아이디 or 배열 인덱스)를 담아야함
      const { status, applicantIndex } = action.payload;
      const applicantList = [...state[+status].contents];
      applicantList.splice(applicantIndex, 1);
      // TODO: 프로퍼티 추가해서 확인
      // applicantList[applicantIndex].isFailed = true;
      // applicantList[applicantIndex].draggable = false;
      state[+status].contents = applicantList;
      return state;
    },
  },
});

export default kanbanSlice.reducer;
export const { onInBoardDrag, onCrossBoardDrag, onRemoveApplicant } =
  kanbanSlice.actions;
