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
    if (token) {
      onLogout(token);
      dispatch(onDeauth());
      navigate("/login");
    }
  };
  return <button onClick={onLogoutClick}>로그아웃</button>;
}
