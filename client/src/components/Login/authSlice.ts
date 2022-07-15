import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  pk: number;
  name: string;
  nickname: string;
  isLogin: boolean;
};

type UserAuthState = {
  user: UserState | null;
  token: string | null;
};

const fake_User: UserAuthState = {
  // local에서 로그인 할때 설정
  user: { pk: 0, name: "김철수", nickname: "떡잎", isLogin: true },
  token: "fake_token_on_local",
};

const authSlice = createSlice({
  name: "AUTH_STATE",
  initialState: fake_User,
  reducers: {
    onAuth(state, action: PayloadAction<UserAuthState>) {
      state = action.payload;
    },
    onDeauth(state) {
      state.user = null;
      state.token = null;
    },
  },
});

export default authSlice.reducer;
export const { onAuth, onDeauth } = authSlice.actions;
