import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  id: number;
  name: string;
  nickname: string;
  isLogin: boolean;
};

type AuthState = {
  authenticated: boolean;
  token: string | null;
};

type AuthActionState = {
  isLogin: boolean;
  access: string;
};

const fakeUser: UserState = {
  id: 1,
  name: "김철수",
  nickname: "친구",
  isLogin: true,
};

const fake_Auth: AuthState = {
  // local에서 로그인 할때 설정
  authenticated: true,
  token: null,
};

const authSlice = createSlice({
  name: "AUTH_STATE",
  initialState: fake_Auth,
  reducers: {
    onAuth(state, action: PayloadAction<AuthActionState>) {
      state.authenticated = action.payload.isLogin;
      state.token = action.payload.access;
    },
    onDeauth(state) {
      state.authenticated = false;
      state.token = null;
    },
  },
});

export default authSlice.reducer;
export const { onAuth, onDeauth } = authSlice.actions;
