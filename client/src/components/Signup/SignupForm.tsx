import { useForm, SubmitHandler } from "react-hook-form";
import { sendSignUp } from "../../api/signupChecker";
import { ErrorMessage } from "@hookform/error-message";
import {
  SubmitButton,
  Form,
  FormWrapper,
  Input,
  ValidationMessage,
  Eye,
  PassWrapper,
} from "../../styles/formStyle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

export type RegisterFormData = {
  name: string;
  nickname: string;
  email: string;
  password: string;
  passwordChecker: string;
  department: string;
};

export default function SignupForm() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const [passwordCheckerShown, setPasswordCheckerShown] = useState(false);
  const togglePasswordCheckerVisiblity = () => {
    setPasswordCheckerShown(passwordCheckerShown ? false : true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormData>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    console.log(data);
    sendSignUp(data);
    navigate("../login");
  };
  console.log(errors);

  const onClick = () => {
    navigate("/login");
  };

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

        <PassWrapper>
          <Input
            type={passwordShown ? "text" : "password"}
            placeholder="비밀번호를 입력해주세요."
            {...register("password", {
              required: "필수 입력 칸입니다.",
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i,
                message: "최소 8글자 이상, 영문과 숫자로 조합해주세요",
              },
            })}
          />
          <Eye onClick={togglePasswordVisiblity}>{eye}</Eye>{" "}
        </PassWrapper>

        <ErrorMessage errors={errors} name="password" as={ValidationMessage} />

        <PassWrapper>
          <Input
            type={passwordCheckerShown ? "text" : "password"}
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
          <Eye onClick={togglePasswordCheckerVisiblity}>{eye}</Eye>{" "}
        </PassWrapper>

        <ErrorMessage
          errors={errors}
          name="passwordChecker"
          as={ValidationMessage}
        />
        {/* TODO: select 컴포넌트 스타일링 해주기 */}
        <select {...register("department", { required: true })}>
          <option value="개발">개발</option>
          <option value="경영지원">경영지원</option>
          <option value="마케팅">마케팅</option>
          <option value="디자인">디자인</option>
        </select>
        <SubmitButton type="submit" value={"가입하기"} />
      </Form>

      <button onClick={onClick}>아이디가 있어요</button>
    </FormWrapper>
  );
}
