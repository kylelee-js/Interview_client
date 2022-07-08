import axios, { AxiosResponse } from "axios";
import { LoginFormData } from "../components/Login/LoginForm";

const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 24시간

export const onLogin = async (data: LoginFormData) => {
  try {
    const res = await axios.post("/login", data);
    onLoginSuccess(res);
    // TODO: 받은 accessToken -> store에 저장하기! - UserState 구현!~
    // TODO: redirect 추가하기?
  } catch (error) {
    console.log(error);
  }
};

export const onSilentRefresh = async (data: AxiosResponse) => {
  try {
    const res = await axios.post("/refresh", data);
    onLoginSuccess(res);
  } catch (error) {
    console.log(error);
  }
};

export const onLoginSuccess = async (response: AxiosResponse) => {
  const { accessToken } = await response.data;
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

  // accessToken 만료하기 1분 전에 로그인 연장
  setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
};
