import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/formStyle";

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;
export default function EmailVerificationPage() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/login");
  };
  return (
    <Wrapper>
      <h3>
        <Typography style={{ fontSize: "18px" }}>
          단비 교육 사내 이메일을 확인해서 도착한 링크를 클릭해주세요!
        </Typography>{" "}
      </h3>

      <div>
        <Button onClick={onClick}>로그인 하러 가기!</Button>
      </div>
    </Wrapper>
  );
}
