import axios, { AxiosResponse } from "axios";

// FIXME: 로그아웃시에는 사용자 상태를 받아와서 제거하는게 맞지 않나? -> createAsyncThunk?
/**
 * 로그아웃 시 실행 될 함수
 * @param {token} accessToken- 서버에서 어떤 사용자를 로그아웃 시킬지 알려줄 토큰
 * @returns {boolean} 성공 여부?
 */

export const onLogout = async () => {
  try {
    const isLogout = await axios.post("/user/logout/");
    delete axios.defaults.headers.common["Authorization"];
    return isLogout;
  } catch (error) {
    console.log(error);
  }
};
