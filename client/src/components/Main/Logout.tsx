import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { onLogout } from "../../api/logoutChecker";
import { useAppDispatch, useAppSelector } from "../../store";
import { onDeauth } from "../Login/authSlice";

// TODO: 스타일링 해주기
export default function Logout() {
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onLogoutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(onDeauth());
    onLogout();

    // dispatch(onDeauth());
    // ProtectedRoute로 감싸서 더이상 강제 리다이렉트는 필요없어 보인다
    // navigate("/login");
  };
  return <button onClick={onLogoutClick}>로그아웃</button>;
}
