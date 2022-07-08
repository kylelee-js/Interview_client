import axios, { AxiosResponse } from "axios";
import { LoginFormData } from "../components/Login/LoginForm";

export const onLogin = async (data: LoginFormData) => {
  try {
    const res = await axios.post("/login", data);
    const accessToken = await onLoginSuccess(res);
    return accessToken;
  } catch (error) {
    console.log(error);
  }
};

// TODO: 화면 새로고침 시에 useEffect에서 호출해서 새로 토큰 발행
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

  return accessToken;
};
