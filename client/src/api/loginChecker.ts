import axios, { AxiosResponse, AxiosError } from "axios";
import { LoginFormData } from "../components/Login/LoginForm";

// 만료시간 : 5분 밀리세컨드
const JWT_EXPIRY_TIME = 5 * 60 * 1000;

export const onLogin = async (data: LoginFormData) => {
  try {
    const res = await axios.post("/user/login/", data);
    await onLoginSuccess(res);
    return res;
    // const { access } = res.data;
    // const { isLogin, name, nickname, pk } = res.data;
    // return { user: { isLogin, name, nickname, pk }, access };
  } catch (error) {
    const errors = error as AxiosError;
    console.log(error);
    if (errors.response?.status == 403) {
      errors.status = "403";
      console.log(errors);
      return errors;
      // return errors.response?.data;
    }
  }
};

export const onLogout = async () => {
  try {
    const isLogout = await axios.post("/user/logout/");
    delete axios.defaults.headers.common["Authorization"];
    return isLogout;
  } catch (error) {
    console.log(error);
    delete axios.defaults.headers.common["Authorization"];
  }
};

// 화면 새로고침 시에 최상단 루트인 App의 useEffect에서 호출해서 새로 토큰 발행
export const onSilentRefresh = async () => {
  const storage = JSON.parse("" + localStorage.getItem("persist:root"));
  const authData = JSON.parse(storage.auth);

  try {
    // Django simpleJWT에서는 헤더에 있으면 오류 상태를 구별을 못하기 때문에 지워주고 다시 넣음
    delete axios.defaults.headers.common["Authorization"];
    const res = await axios.post("/user/refresh/", { access: authData.access });
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
