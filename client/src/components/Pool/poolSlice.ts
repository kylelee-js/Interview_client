import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { onFetchPoolData } from "../../api/poolApi";
import { ApplicantBoardType } from "../KanBanBoard/kanbanSlice";

type ApplicantActionType = {
  status: string;
  // FIXME: 일단은 인덱스로 -> 나중에 고유 식별 값으로 교체 (applicantId)
  applicantIndex: number;
};
const myPageBoards = ["미등록", "서류합격", "1차합격", "2차합격", "최종합격"];
// 칸반보드 객체 배열
// const fakeBoards: ApplicantBoardType[] | null = [];

const fakeBoards: ApplicantBoardType[] | null = [
  {
    boardName: "개발",
    boardStatus: 1,
    applicants: [],
    pk: 123,
  },
  {
    boardName: "경영지원",
    boardStatus: 2,
    pk: 124,
    applicants: [
      {
        id: 34,
        applicantName: "검색지원자2",
        birth: "121212",
        department: "경영지원",
        job: "서무",
        file: [
          {
            id: 24,
            file: "/media/applicant/2022/08/09/sample2.pdf",
            applicant: 34,
          },
        ],
        status: "0",
        isFailed: false,
        isFixed: false,
        board: [],
        interviewer: [],
        tags: [],
        interviewDate: null,
      },
      {
        id: 35,
        applicantName: "검색지원자3",
        birth: "121212",
        department: "경영지원",
        job: "도급",
        file: [
          {
            id: 25,
            file: "/media/applicant/2022/08/09/sample3.pdf",
            applicant: 35,
          },
        ],
        status: "0",
        isFailed: false,
        isFixed: false,
        board: [],
        interviewer: [],
        tags: [],
        interviewDate: null,
      },
    ],
  },
  {
    boardName: "마케팅",
    boardStatus: 3,
    pk: 125,
    applicants: [
      {
        id: 33,
        applicantName: "검색지원자1",
        birth: "121121",
        department: "마케팅",
        job: "마케터",
        file: [
          {
            id: 23,
            file: "/media/applicant/2022/08/09/sample1.pdf",
            applicant: 33,
          },
        ],
        status: "0",
        isFailed: false,
        isFixed: false,
        board: [],
        interviewer: [],
        tags: [],
        interviewDate: null,
      },
    ],
  },
  {
    boardName: "디자인",
    boardStatus: 4,
    pk: 126,
    applicants: [],
  },
];

export const fetchPoolBoard = createAsyncThunk("FETCH_POOL_BOARD", async () => {
  const poolBoardData = await onFetchPoolData();
  return poolBoardData;
});

const poolSlice = createSlice({
  name: "POOL_BOARD",
  // TODO: 지원자 상태에서 불러와서 칸반 보드를 형성해야함!
  initialState: fakeBoards,
  reducers: {
    onSetMyApplicant(state, action) {
      // FIXME: 토글 bool 상태 하나 넣어서 토글
      const { boardStatus, applicantIndex, user } = action.payload;
      const applicantList = [...state[+boardStatus - 1].applicants];
      applicantList[applicantIndex].interviewer?.push(user);
      state[+boardStatus - 1].applicants = applicantList;
      return state;
    },
    onUnsetMyApplicant(state, action) {
      // FIXME: 토글 bool 상태 하나 넣어서 토글
      const { boardStatus, applicantIndex, userPk } = action.payload;
      const applicantList = [...state[+boardStatus - 1].applicants];
      const userIndex = applicantList[applicantIndex].interviewer?.findIndex(
        (viewer) => viewer.pk == userPk
      );
      applicantList[applicantIndex].interviewer?.splice(userIndex!, 1);
      state[+boardStatus - 1].applicants = applicantList;
      return state;
    },

    onTagWrite(state, action) {
      // TODO: post res로 받아온 id로 설정
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
      // TODO: post res로 받아온 id로 설정
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPoolBoard.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export default poolSlice.reducer;
export const { onSetMyApplicant, onUnsetMyApplicant, onTagWrite, onTagDelete } =
  poolSlice.actions;
