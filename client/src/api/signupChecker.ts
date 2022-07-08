import axios from "axios";
import { RegisterFormData } from "../components/Signup/SignupForm";

export const sendSignUp = async (formData: RegisterFormData) => {
  try {
    const res = await axios.post(
      // FIXME: 나중에 진짜 서버 통신 엔드포인트로 변경
      "/user/register/",
      formData
    );
    console.log("access token", res.data); //res.data = { 서버가 보내준 키 : 서버가 보내준 값, token : jwt토큰 값 }
    const accessToken = await res.data;
    // FIXME: 기본 헤더 설정
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken.access}`;

    // TODO: 받은 accessToken -> store에 저장하기! - UserState 구현!~

    // Refresh token은 httponly 설정으로 쿠키로 전달된다.
  } catch (error) {
    console.log(error);
  }
};

//       // FIXME: 로그인할 때 헤더?
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Basic ${token}`,
//       },
//     }
