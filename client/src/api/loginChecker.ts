import axios, { AxiosResponse } from "axios";
import { LoginFormData } from "../components/Login/LoginForm";

// 만료시간 : 5분 밀리세컨드
const JWT_EXPIRY_TIME = 5 * 60 * 1000;

export const onLogin = async (data: LoginFormData) => {
  try {
    const res = await axios.post("/user/login/", data);
    const { isLogin, access } = res.data;
    await onLoginSuccess(res);

    return { access, isLogin };
  } catch (error) {
    console.log(error);
  }
};

// 화면 새로고침 시에 최상단 루트인 App의 useEffect에서 호출해서 새로 토큰 발행
export const onSilentRefresh = async () => {
  console.log("refresh");
  try {
    const res = await axios.get("/user/refresh/");
    onLoginSuccess(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const onLoginSuccess = async (response: AxiosResponse) => {
  const { access } = await response.data;
  axios.defaults.headers.common["Authorization"] = `Bearer ${access}`;
  setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000); // 일분 전에 refresh
};
