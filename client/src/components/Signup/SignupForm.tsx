import { useForm, SubmitHandler } from "react-hook-form";
import { sendSignUp } from "../../api/signupChecker";
import {
  SubmitButton,
  Form,
  FormWrapper,
  Input,
  Eye,
  PassWrapper,
  Button,
  Select,
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
    setError,
  } = useForm<RegisterFormData>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    console.log(data);
    const res = await sendSignUp(data);
    console.log(res);
    // TODO: 에러 필드 값 확인!
    if (res.email) {
      setError("email", {
        type: "pattern",
        message: "이미 회원가입된 이메일입니다.",
      });
    } else {
      navigate("../verification");
    }
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
          placeholder="이름을 입력해주세요."
          {...register("name", {
            required: "필수 입력 칸입니다.",
            maxLength: 100,
          })}
        />
        {errors.name && (
          <div style={{ color: "red" }}> {errors.name?.message}</div>
        )}
        <Input
          type="text"
          placeholder="호을 입력해주세요."
          {...register("nickname", {
            required: "필수 입력 칸입니다.",
            maxLength: 100,
          })}
        />
        {errors.nickname && (
          <div style={{ color: "red" }}> {errors.nickname?.message}</div>
        )}
        <Input
          type="text"
          placeholder="단비교육 사내 이메일을 입력해주세요."
          {...register("email", {
            required: "필수 입력 칸입니다.",
            pattern: {
              value: /^\S+@\bdanbiedu.co.kr\b$/i,
              message: "단비교육 이메일 양식이 아닙니다.",
            },
          })}
        />
        {errors.email && (
          <div style={{ color: "red" }}> {errors.email?.message}</div>
        )}
        <PassWrapper>
          <Input
            type={passwordShown ? "text" : "password"}
            placeholder="비밀번호를 입력해주세요. (영문 + 숫자 8자 이상)"
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
        {errors.password && (
          <div style={{ color: "red" }}> {errors.password?.message}</div>
        )}
        <PassWrapper>
          <Input
            type={passwordCheckerShown ? "text" : "password"}
            placeholder="비밀번호를 재입력해주세요."
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
        {errors.passwordChecker && (
          <div style={{ color: "red" }}> {errors.passwordChecker?.message}</div>
        )}
        {/* TODO: select 컴포넌트 스타일링 해주기 */}
        <Select
          {...register("department", { required: "필수 입력 칸입니다." })}
        >
          <option style={{ display: "none" }} value="" disabled selected>
            직군을 선택해주세요.
          </option>
          <option value="개발">개발</option>
          <option value="경영지원">경영지원</option>
          <option value="마케팅">마케팅</option>
          <option value="디자인">디자인</option>
        </Select>
        {errors.department && (
          <div style={{ color: "red" }}> {errors.department?.message}</div>
        )}
        <SubmitButton type="submit" value={"가입하기"} />
      </Form>
      <Button onClick={onClick}>아이디가 있어요</Button>
    </FormWrapper>
  );
}
