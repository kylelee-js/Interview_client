import React, { useState } from "react";
import styled from "styled-components";

const Btn = styled.button`
  /* 버튼 크기 조정 여기서 */
  width: 40px;
  height: 40px;
  background: #fff;
  cursor: pointer;
  border: 2px solid #095776;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    transform: translate(-50%, -50%);
    height: 4px;
    width: 50%;
    background: #095776;
    top: 50%;
    left: 50%;
  }
  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #095776;
    height: 50%;
    width: 4px;
  }
  :hover::after,
  :hover::before {
    background: #fff;
    transition: 0.2s;
  }
  :hover {
    background-color: #095776;
    transition: 0.2s;
  }
`;

export default function GeneratorBtn() {
  // 모달창 띄우기 + 오버레이 페이드인
  const onClick = () => {};
  return <Btn onClick={onClick} />;
}
