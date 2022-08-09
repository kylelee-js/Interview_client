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
const fakeBoards: ApplicantBoardType[] | null = [];

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
