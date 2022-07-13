import axios, { AxiosResponse } from "axios";

// FIXME: 로그아웃시에는 사용자 상태를 받아와서 제거하는게 맞지 않나? -> createAsyncThunk?
/**
 * 로그아웃 시 실행 될 함수
 * @param {token} accessToken- 서버에서 어떤 사용자를 로그아웃 시킬지 알려줄 토큰
 * @returns {boolean} 성공 여부?
 */

// TODO: 로그아웃을 하려면 우선 로그인이 먼저 되어있어야한다 => 로그인 상태 설정하기
// TODO: 로그아웃 시에는 localStorage에 저장된 access token 삭제해야함!
export const onLogout = async () => {
  try {
    const isLogout = await axios.post("/user/logout/");
    return isLogout;
  } catch (error) {
    console.log(error);
  }
};
