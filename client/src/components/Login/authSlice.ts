import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  pk: number;
  name: string;
  nickname: string;
  isLogin: boolean;
};

type UserAuthState = {
  user: UserState | null;
  access: string | null;
};

const fake_User: UserAuthState = {
  // local에서 로그인 할때 설정
  user: { pk: 0, name: "김철수", nickname: "떡잎", isLogin: true },
  // user: null,
  access: "fake_token_on_local",
};

const authSlice = createSlice({
  name: "AUTH_STATE",
  initialState: fake_User,
  reducers: {
    onAuth(state, action: PayloadAction<UserAuthState>) {
      return action.payload;
    },
    onDeauth(state) {
      state.user = null;
      state.access = null;
      return state;
    },
    onReauth(
      state,
      action: PayloadAction<{ isLogin: boolean; access: string }>
    ) {
      state.user!.isLogin = action.payload.isLogin;
      state.access = action.payload.access;
      return state;
    },
  },
});

export default authSlice.reducer;
export const { onAuth, onDeauth, onReauth } = authSlice.actions;
