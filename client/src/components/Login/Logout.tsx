import { Button } from "@mui/material";
import React from "react";
import { onLogout } from "../../api/loginChecker";
import { useAppDispatch } from "../../store";
import { onDeauth } from "./authSlice";

// TODO: 스타일링 해주기
export default function Logout() {
  const dispatch = useAppDispatch();
  const onLogoutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // TODO: 로그아웃 시에는 localStorage에 저장된 state를 삭제해주자
    dispatch(onDeauth());
    console.log("logout");
    onLogout();
  };
  return (
    <Button
      style={{ backgroundColor: "#54aceb", color: "whitesmoke" }}
      onClick={onLogoutClick}
    >
      로그아웃
    </Button>
  );
}
