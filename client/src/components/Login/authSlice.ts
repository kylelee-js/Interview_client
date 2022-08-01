import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { on } from "events";
import { onUserNotice } from "../../api/boardUpdate";
import { onSilentRefresh } from "../../api/loginChecker";

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
export const reAuthUser = createAsyncThunk("REAUTH", async () => {
  try {
    const res = await onSilentRefresh();
    return res;
  } catch (error) {
    console.log(error);
    onDeauth();
  }
});

export const noticeAfterLogin = createAsyncThunk(
  "NOTICE_AFTER_LOGIN",
  async () => {
    const notice = await onUserNotice();
    return notice;
  }
);

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
    onReload(state) {
      state.access = null;
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
  extraReducers: (builder) => {
    builder.addCase(
      reAuthUser.fulfilled,
      (state, action: PayloadAction<{ isLogin: boolean; access: string }>) => {
        state.user!.isLogin = action.payload.isLogin;
        state.access = action.payload.access;
        return state;
      }
    );
    builder.addCase(
      noticeAfterLogin.fulfilled,
      (state, action: PayloadAction<{ isChanged: boolean }>) => {
        state.user!.onLoginChange = action.payload.isChanged;
        return state;
      }
    );
  },
});

export default authSlice.reducer;
export const {
  onAuth,
  onDeauth,
  // onReauth,
  onReload,
  onNotice,
  onNoticeFalse,
  // onLoginNotice,
  onLoginNoticeFalse,
} = authSlice.actions;
