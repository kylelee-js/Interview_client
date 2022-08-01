import axios, { AxiosError } from "axios";
import { RegisterFormData } from "../components/Signup/SignupForm";

export const sendSignUp = async (formData: FormData) => {
  delete axios.defaults.headers.common["Authorization"];
  try {
    const res = await axios.post("/user/register/", formData, {
      headers: {
        Accept: "application/json",
      },
    });
    return res.data;
  } catch (err) {
    const errors = err as AxiosError;
    return errors?.response?.data;
  }
};

export const resendEmailVerification = async (verificationPk: string) => {
  delete axios.defaults.headers.common["Authorization"];
  try {
    const res = await axios.get(`/user/resend/${verificationPk}`);
    return res.data;
  } catch (error) {
    console.log(error);
    // const errors = error as AxiosError;
    // return errors?.response?.data;
  }
};
