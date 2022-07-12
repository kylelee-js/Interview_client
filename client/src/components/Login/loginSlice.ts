import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  id: number;
  name: string;
  nickname: string;
  isLogin: boolean;
};

// FIXME: 초기 상태
const fakeUser: UserState = {
  id: 1,
  name: "김철수",
  nickname: "친구",
  isLogin: true,
};

// FIXME: 사용자들 정보 상태 관리 예시
// const usersSlice = createSlice({
//   name: 'users',
//   initialState: {
//     entities: [],
//     loading: 'idle',
//     currentRequestId: undefined,
//     error: null,
//   },

const loginSlice = createSlice({
  name: "User_State",
  initialState: fakeUser,
  reducers: {
    onLogin(state, action) {},
  },
});

export default loginSlice.reducer;
export const { onLogin } = loginSlice.actions;
