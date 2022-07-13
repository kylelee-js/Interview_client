import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  authenticated: boolean;
  token: string | null;
};

type AuthActionState = {
  isLogin: boolean;
  access: string;
};

// type UserAuthState = {
//   name: string;
//   nickname: string;
//   isLogin: boolean;
//   accessToken: string | null;
// };

// const initialUserState: UserAuthState = {
//   // userId : 필수?
//   name: "",
//   nickname: "",
//   isLogin: false,
//   accessToken: null,
// };

const fake_Auth: AuthState = {
  // local에서 로그인 할때 설정
  authenticated: true,
  token: "asdads",
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
