import axios from "axios";
import { RegisterFormData } from "../components/Signup/SignupForm";

export const sendSignUp = async (formData: RegisterFormData) => {
  try {
    const res = await axios.post("/user/register/", formData);

    // FIXME: 회원가입에 토큰이 필요한가?
    // console.log("access token", res.data); //res.data = { 서버가 보내준 키 : 서버가 보내준 값, token : jwt토큰 값 }
    // const accessToken = await res.data;
    // // 기본 헤더 설정
    // axios.defaults.headers.common[
    //   "Authorization"
    // ] = `Bearer ${accessToken.access}`;

    // return accessToken.access;
    // // Refresh token은 httponly 설정으로 쿠키로 전달된다.
  } catch (error) {
    console.log(error);
  }
};
