import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  pk: number;
  name: string;
  nickname: string;
  isLogin: boolean;
  isChanged?: boolean;
  onLoginChange?: boolean;
};

type UserAuthState = {
  user: UserState | null;
  access: string | null;
};

const fake_User: UserAuthState = {
  user: null,
  access: null,
};

const authSlice = createSlice({
  name: "AUTH_STATE",
  initialState: fake_User,
  reducers: {
    onAuth(state, action: PayloadAction<UserAuthState>) {
      state = action.payload;
      return state;
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
    onLoginNotice(state, action: PayloadAction<{ isChanged: boolean }>) {
      state.user!.onLoginChange = action.payload.isChanged;
      return state;
    },
    onLoginNoticeFalse(state) {
      state.user!.onLoginChange = false;
      return state;
    },
    onNotice(state, action: PayloadAction<{ isChanged: boolean }>) {
      state.user!.isChanged = action.payload.isChanged;
      return state;
    },
    onNoticeFalse(state) {
      state.user!.isChanged = false;
      return state;
    },
  },
});

export default authSlice.reducer;
export const {
  onAuth,
  onDeauth,
  onReauth,
  onNotice,
  onNoticeFalse,
  onLoginNotice,
  onLoginNoticeFalse,
} = authSlice.actions;
