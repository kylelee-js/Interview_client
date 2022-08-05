import axios, { AxiosResponse, AxiosError } from "axios";
import { LoginFormData } from "../components/Login/LoginForm";

// 만료시간 : 5분 밀리세컨드
const JWT_EXPIRY_TIME = 5 * 60 * 1000;

export const onLogin = async (data: LoginFormData) => {
  try {
    const res = await axios.post("/user/login/", data);
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${res.data.access}`;
    return res;
  } catch (error) {
    const errors = error as AxiosError;
    console.log(error);
    if (errors.response?.status == 403) {
      errors.status = "403";
      console.log(errors);
      return errors;
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
export const onSilentRefresh = async (access: string) => {
  const instance = axios.create();
  try {
    // Django simpleJWT에서는 헤더에 있으면 오류 상태를 구별을 못하기 때문에 지워주고 다시 넣음
    delete instance.defaults.headers.common["Authorization"];
    // delete axios.defaults.headers.common["Authorization"];
    const res = await instance.post("/user/refresh/", { access: access });
    if (!res.data) {
      console.log("서버가 아무것도 안줬어요 200인데");
    }
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${res.data.access}`;
    return res.data;
  } catch (error) {
    console.log(error);
    // TODO: 에러 핸들링은 createAsyncThunk 안에서 reject로 감싸줘야한다.
    // 리로드에 문제 발생 시 로커스토리지를 비운다. - isLogin 없애기
    sessionStorage.setItem("persist:root", "");
  }
};
