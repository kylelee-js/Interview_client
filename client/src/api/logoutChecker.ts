import axios, { AxiosResponse } from "axios";

// FIXME: 로그아웃시에는 사용자 상태를 받아와서 제거하는게 맞지 않나? -> createAsyncThunk?
/**
 * 로그아웃 시 실행 될 함수
 * @param {UserState} data 서버에서 어떤 사용자를 로그아웃 시킬지 알려줄 데이터
 * @returns {boolean} 성공 여부?
 */

// FIXME: 임시 유저 타입
type UserState = {
  id: number;
  name: string;
  nickname: string;
  isLogin: boolean;
};

// TODO: 로그아웃을 하려면 우선 로그인이 먼저 되어있어야한다 => 로그인 상태 설정하기
export const onlogout = async (data: UserState) => {
  try {
    const res = await axios.post("/logout", data);
    // TODO: 로그아웃시 리덕스에 있는 accesstoken을 제거한다?!
    // 그럼 서버에서
  } catch (error) {
    console.log(error);
  }
};
