import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApplicantDataType } from "../Applicant/applicantSlice";
import { CardCoordinateType } from "./Kanban";

export type ApplicantCardType = {
  id: number;
  name: string;
  tagNote: string[] | [];
  status: string;
  department: string;
  job: string;
  isFailed?: boolean;
  isFixed?: boolean;
};

export type ApplicantBoardType = {
  boardStatus: number;
  boardName: string;
  applicants: ApplicantDataType[];
};

type ApplicantActionType = {
  status: string;
  // FIXME: 일단은 인덱스로 -> 나중에 고유 식별 값으로 교체 (applicantId)
  applicantIndex: number;
};

// 칸반보드 객체 배열
const fakeBoards: ApplicantBoardType[] = [
  {
    boardStatus: 1,
    boardName: "서류합격",
    applicants: [
      {
        id: 0,
        applicantName: "Kyle Lee",
        // date: new Date(),
        tagNote: ["#asd", "#qwe"],
        department: "개발",
        job: "QA",
        status: "0",
      },
      {
        id: 1,
        applicantName: "David Kim",
        // date: new Date(),
        tagNote: ["#zxc", "#hfdghsd"],
        department: "개발",
        job: "데브옵스",
        status: "0",
      },
      {
        id: 2,
        applicantName: "Paul Shelby",
        // date: new Date(),
        tagNote: ["#zxcxcc", "#q2123"],
        department: "개발",
        job: "기획",
        status: "0",
      },
      {
        id: 3,
        applicantName: "Susan Carson",
        // date: new Date(),
        tagNote: ["#zxcvvd", "#fasdf"],
        department: "개발",
        job: "프론트",
        status: "0",
      },
    ],
  },
  {
    boardStatus: 2,
    boardName: "1차합격",
    applicants: [
      {
        id: 0,
        applicantName: "김철수",
        // date: new Date(),
        tagNote: ["#asd", "#qwe"],
        department: "개발",
        job: "프론트",
        status: "1",
      },
      {
        id: 1,
        applicantName: "박영희",
        // date: new Date(),
        tagNote: ["#zxc", "#hfdghsd"],
        department: "개발",
        job: "백엔드",
        status: "1",
      },
      {
        id: 2,
        applicantName: "권지용",
        // date: new Date(),
        tagNote: ["#zxcxcc", "#q2123"],
        department: "개발",
        job: "데브옵스",
        status: "1",
      },
    ],
  },
  {
    boardStatus: 3,
    boardName: "2차합격",
    applicants: [
      {
        id: 0,
        applicantName: "송하영",
        // date: new Date(),
        tagNote: ["#asd", "#qwe"],
        department: "개발",
        job: "프론트엔드",
        status: "2",
      },
      {
        id: 1,
        applicantName: "유재석",
        // date: new Date(),
        tagNote: ["#zxc", "#hfdghsd"],
        department: "마케팅",
        job: "디자이너",
        status: "2",
      },
    ],
  },
  {
    boardStatus: 4,
    boardName: "최종합격",
    applicants: [
      {
        id: 0,
        applicantName: "권숙",
        // date: new Date(),
        tagNote: ["#asd", "#qwe"],
        department: "개발",
        job: "기획",
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
      const sourceBoard = state[+sourceId].applicants;
      const sourceCard = sourceBoard[+sourceIndex];
      sourceBoard.splice(sourceIndex, 1);
      sourceBoard.splice(destIndex, 0, sourceCard);
      state[+sourceId].applicants = sourceBoard;
      return state;
    },
    onCrossBoardDrag(state, action: PayloadAction<CardCoordinateType>) {
      const { destId, sourceId, destIndex, sourceIndex } = action.payload;
      const destinationBoard = [...state[+destId].applicants];
      const sourceBoard = [...state[+sourceId].applicants];
      const sourceCard = sourceBoard[sourceIndex];
      // 채용상태 변경 -> 보드이름으로? 채용상태 테이블 따로?
      sourceCard.status = "" + state[+destId].applicants;
      sourceBoard.splice(sourceIndex, 1);
      destinationBoard.splice(destIndex, 0, sourceCard);
      state[+destId].applicants = destinationBoard;
      state[+sourceId].applicants = sourceBoard;
      return state;
    },
    onRemoveApplicant(state, action: PayloadAction<ApplicantActionType>) {
      // TODO: action payload는 지원자의 상태(보드 아이디)와 지원자 고유식별 값(개인 아이디 or 배열 인덱스)를 담아야함
      const { status, applicantIndex } = action.payload;
      const applicantList = [...state[+status].applicants];
      // applicantList.splice(applicantIndex, 1);
      // TODO: 프로퍼티 추가해서 확인
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
      // TODO: 프로퍼티 추가해서 확인
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
      // TODO: 프로퍼티 추가해서 isFixed
      applicantList[applicantIndex].isFixed = true;
      state[+status].applicants = applicantList;
      return state;
    },
    onUnfixApplicant(state, action: PayloadAction<ApplicantActionType>) {
      // TODO: action payload는 지원자의 상태(보드 아이디)와 지원자 고유식별 값(개인 아이디 or 배열 인덱스)를 담아야함
      const { status, applicantIndex } = action.payload;
      const applicantList = [...state[+status].applicants];
      // applicantList.splice(applicantIndex, 1);
      // TODO: 프로퍼티 추가해서 isFixed
      applicantList[applicantIndex].isFixed = false;
      state[+status].applicants = applicantList;
      return state;
    },
  },
});

export default kanbanSlice.reducer;
export const {
  onInBoardDrag,
  onCrossBoardDrag,
  onRemoveApplicant,
  onRollbackApplicant,
  onFixApplicant,
  onUnfixApplicant,
} = kanbanSlice.actions;
