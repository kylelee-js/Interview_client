import { useState } from "react";
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
import { AxiosError, AxiosResponse } from "axios";
import { resendEmailVerification } from "../../api/signupChecker";

type VerificationPk = {
  verificationPk: string;
};
declare function isVerificationPk(x: unknown): x is VerificationPk;

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

  const [emailReverification, setEmailRevierfication] =
    useState<boolean>(false);
  const [reverificationPk, setReverificationPk] = useState<string>("");

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  // login 후 notice가 myapplicant보다 먼저 실행되야함
  useDidMountEffect(() => {
    dispatch(noticeAfterLogin());
    navigate("/", { replace: true });
  }, [isLogin]);

  // TODO: createAsyncThunk로 다시 만들기
  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    const res = await onLogin(data);
    console.log(res);
    if (res?.status == "200") {
      console.log(res);
      // FIXME: 타입 단언 -> 타입 가드로 수정하기!
      const response = res as AxiosResponse;
      const { access, isLogin, name, nickname, pk } = response.data;
      dispatch(
        onAuth({
          user: { isLogin, name, nickname, pk, justLogin: true },
          access,
        })
      );
    } else if (res?.status == "403") {
      console.log(res);
      const { response } = res as AxiosError;
      // TODO: unknown 타입에 타입 선언하기 -> 어떻게?
      const data = response?.data as VerificationPk;
      if (data) {
        setReverificationPk(data.verificationPk!);
        setEmailRevierfication(true);
        setError("password", {
          type: "value",
          message: "인증이 확인되지 않은 계정입니다. 이메일을 재전송해주세요.",
        });
      } else {
        setError("password", {
          type: "value",
          message: "인증 절차에 문제가 있습니다. 다시 시도해주세요.",
        });
      }
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

  const onReverification = () => {
    resendEmailVerification(reverificationPk);
    navigate("/verification");
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="이메일 주소를 입력해주세요."
          {...register("email", { required: "필수 입력칸입니다." })}
        />
        {errors.email && (
          <div style={{ color: "red" }}> {errors.email?.message}</div>
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
      {emailReverification && (
        <Button
          style={{ backgroundColor: "blueviolet" }}
          onClick={onReverification}
        >
          이메일 재전송
        </Button>
      )}
      <Button onClick={onClick}>회원가입 할래요</Button>
    </FormWrapper>
  );
}
