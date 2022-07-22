import axios from "axios";
import { RegisterFormData } from "../components/Signup/SignupForm";

export const sendSignUp = async (formData: RegisterFormData) => {
  delete axios.defaults.headers.common["Authorization"];
  try {
    const res = await axios.post("/user/register/", formData, {
      headers: {
        Accept: "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};
