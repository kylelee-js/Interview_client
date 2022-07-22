import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";

export default function LoginPage() {
  const url = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(url.pathname);
    if (url.pathname !== "/login") {
      navigate("/login");
    }
  }, []);
  // TODO: 각 페이지에 컨테이너와 프레센테이션
  return <LoginForm />;
}
