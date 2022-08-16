import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { onNoticeUser } from "../../api/boardApi";
import { onSilentRefresh } from "../../api/loginApi";
import { RootState } from "../../store";

export type UserState = {
  pk: number;
  name: string;
  nickname: string;
  isLogin: boolean;
  isChanged?: boolean;
  justLogin?: boolean;
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
export const reAuthUser = createAsyncThunk(
  "REAUTH",
  async (_, { getState }) => {
    try {
      // TODO: typescript로 넣기
      const state = getState() as RootState;
      const res = await onSilentRefresh(state.auth.access!);
      return res;
    } catch (error) {
      console.log(error);
      onDeauth();
    }
  }
);

export const noticeAfterLogin = createAsyncThunk(
  "NOTICE_AFTER_LOGIN",
  async () => {
    const notice = await onNoticeUser();
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
    onLoginNoticeFalse(state) {
      state.user!.onLoginChange = false;
      return state;
    },
    onNotice(state, action: PayloadAction<{ isChanged: boolean }>) {
      if (state.user) {
        state.user.isChanged = action.payload.isChanged;
        return state;
      }
      return state;
    },
    onNoticeFalse(state) {
      state.user!.isChanged = false;
      return state;
    },
    onAfterLogin(state) {
      state.user!.justLogin = false;
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
        if (state.user) {
          state.user.onLoginChange = action.payload.isChanged;
          return state;
        }
        return state;
      }
    );
  },
});

export default authSlice.reducer;
export const {
  onAuth,
  onDeauth,
  onNotice,
  onNoticeFalse,
  onLoginNoticeFalse,
  onAfterLogin,
} = authSlice.actions;
