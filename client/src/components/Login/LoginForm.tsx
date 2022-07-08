import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { onLogin } from "../../api/loginChecker";
import { useAppDispatch } from "../../store";
import { SubmitButton, Form, FormWrapper, Input } from "../../styles/formStyle";
import { onAuth } from "./authSlice";

export type LoginFormData = {
  ID: string;
  Password: string;
};

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormData>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    const accessToken = await onLogin(data);
    dispatch(onAuth(accessToken));
    navigate("/");
    console.log(data);
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="이메일 주소를 입력해주세요."
          {...register("ID", { required: true })}
        />
        <Input
          placeholder="비밀번호를 입력해주세요."
          {...register("Password", { required: true })}
        />
        <SubmitButton readOnly value={"로그인"} />
      </Form>
    </FormWrapper>
  );
}
