import React, { useState } from "react";
import styled from "styled-components";
import { onLogout } from "../../api/logoutChecker";
import { useAppDispatch, useAppSelector } from "../../store";
import { onDeauth } from "./authSlice";

// TODO: 스타일링 해주기
export default function Logout() {
  const token = useAppSelector((state) => state.auth.access);
  const dispatch = useAppDispatch();
  const onLogoutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // TODO: 로그아웃 시에는 localStorage에 저장된 state를 삭제해주자
    dispatch(onDeauth());
    console.log("logout");
    onLogout();
  };
  return <button onClick={onLogoutClick}>로그아웃</button>;
}
