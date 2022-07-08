import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  id: number;
  name: string;
  nickname: string;
  isLogin: boolean;
};

const fakeUser: UserState = {
  id: 1,
  name: "김철수",
  nickname: "친구",
  isLogin: true,
};

const loginSlice = createSlice({
  name: "User_State",
  initialState: fakeUser,
  reducers: {
    onLogin(state, action) {},
  },
});

export default loginSlice.reducer;
export const { onLogin } = loginSlice.actions;
