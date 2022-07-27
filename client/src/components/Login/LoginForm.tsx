import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { onLogin } from "../../api/loginChecker";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  SubmitButton,
  Form,
  FormWrapper,
  Input,
  Eye,
  PassWrapper,
  Button,
} from "../../styles/formStyle";
import { noticeAfterLogin, onAuth } from "./authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import useDidMountEffect from "../../hooks/useDidMountEffect";
import { onUserNotice } from "../../api/boardUpdate";
const eye = <FontAwesomeIcon icon={faEye} />;

export type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormData>();

  const isLogin = useAppSelector((state) => state.auth.user?.isLogin);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  // login 후 notice가 myapplicant보다 먼저 실행됨
  useDidMountEffect(() => {
    dispatch(noticeAfterLogin());
    navigate("/", { replace: true });
  }, [isLogin]);

  // TODO: createAsyncThunk로 다시 만들기
  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    const res = await onLogin(data);
    console.log(res);
    if (res) {
      dispatch(onAuth(res));
    } else {
      setError("password", {
        type: "value",
        message: "잘못된 아이디 또는 비밀번호입니다.",
      });
    }
  };

  const onClick = () => {
    navigate("/signup", { replace: true });
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="이메일 주소를 입력해주세요."
          {...register("email", { required: "필수 입력칸입니다." })}
        />
        {errors.password && (
          <div style={{ color: "red" }}> {errors.password?.message}</div>
        )}
        <PassWrapper>
          <Input
            type={passwordShown ? "text" : "password"}
            placeholder="비밀번호를 입력해주세요."
            {...register("password", { required: "필수 입력칸입니다." })}
          />
          <Eye onClick={togglePasswordVisiblity}>{eye}</Eye>{" "}
        </PassWrapper>
        {errors.password && (
          <div style={{ color: "red" }}> {errors.password?.message}</div>
        )}
        <SubmitButton type="submit" readOnly value={"로그인"} />
      </Form>
      <Button onClick={onClick}>회원가입 할래요</Button>
    </FormWrapper>
  );
}
