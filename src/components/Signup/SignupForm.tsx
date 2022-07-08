import { useForm, SubmitHandler } from "react-hook-form";
import { sendSignUp } from "../../api/signupChecker";
import { ErrorMessage } from "@hookform/error-message";
import {
  SubmitButton,
  Form,
  FormWrapper,
  Input,
  ValidationMessage,
} from "../../styles/formStyle";
import { useDispatch } from "react-redux";

export type RegisterFormData = {
  name: string;
  // 단비 - 호
  nickname: string;
  email: string;
  password: string;
  passwordChecker: string;
  department: string;
};

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormData>();

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    console.log(data);
    sendSignUp(data);
    // TODO: dispatch 추가하기!!
    // dispatch();
  };
  console.log(errors);

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="이름을 입력해주세요"
          {...register("name", {
            required: "필수 입력 칸입니다.",
            maxLength: 100,
          })}
        />
        <ErrorMessage errors={errors} name="name" as={ValidationMessage} />
        <Input
          type="text"
          placeholder="호을 입력해주세요"
          {...register("nickname", {
            required: "필수 입력 칸입니다.",
            maxLength: 100,
          })}
        />
        <ErrorMessage errors={errors} name="nickname" as={ValidationMessage} />
        <Input
          type="text"
          placeholder="이메일을 입력해주세요"
          {...register("email", {
            required: "필수 입력 칸입니다.",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "이메일 양식이 아닙니다.",
            },
          })}
        />
        <ErrorMessage errors={errors} name="email" as={ValidationMessage} />
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          {...register("password", {
            required: "필수 입력 칸입니다.",
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i,
              message: "최소 8글자 이상, 영문과 숫자로 조합해주세요",
            },
          })}
        />
        <ErrorMessage errors={errors} name="password" as={ValidationMessage} />
        <Input
          type="password"
          placeholder="비밀번호를 재입력해주세요"
          {...register("passwordChecker", {
            required: "필수 입력 칸입니다.",
            validate: (val: string) => {
              if (watch("password") != val) {
                return "비밀번호가 일치하지 않습니다.";
              }
            },
          })}
        />
        <ErrorMessage
          errors={errors}
          name="passwordChecker"
          as={ValidationMessage}
        />
        <select {...register("department", { required: true })}>
          <option value="개발">개발</option>
          <option value="경영지원">경영지원</option>
          <option value="마케팅">마케팅</option>
          <option value="디자인">디자인</option>
        </select>

        <SubmitButton type="submit" value={"가입하기"} />
      </Form>
    </FormWrapper>
  );
}
