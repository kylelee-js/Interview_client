import { useForm, SubmitHandler } from "react-hook-form";
import { onLogin } from "../../api/loginChecker";
import { SubmitButton, Form, FormWrapper, Input } from "../../styles/formStyle";

export type LoginFormData = {
  ID: string;
  Password: string;
};

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    onLogin(data);
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
        <SubmitButton value={"로그인"} />
      </Form>
    </FormWrapper>
  );
}
