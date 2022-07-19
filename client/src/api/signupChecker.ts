import axios from "axios";
import { RegisterFormData } from "../components/Signup/SignupForm";

export const sendSignUp = async (formData: RegisterFormData) => {
  try {
    const res = await axios.post("/user/register/", formData);
  } catch (error) {
    console.log(error);
  }
};
