import axios, { AxiosError } from "axios";
import { RegisterFormData } from "../components/Signup/SignupForm";

export const sendSignUp = async (formData: RegisterFormData) => {
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
