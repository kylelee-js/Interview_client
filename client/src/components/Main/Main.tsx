import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import KanBanContainer from "../../container/KanBanContainer";
import Logout from "../Login/Logout";

const Wrapper = styled.div`
  width: 100vw;
`;

const AdHocMenu = styled.div`
  padding: 5px;
  width: 100%;
  display: flex;
  gap: 20px;
  background-color: whitesmoke;
`;

export default function Main() {
  return (
    <Wrapper>
      <AdHocMenu>
        <Link to="/pool">인재 풀 보러가기</Link>
        <Logout />
      </AdHocMenu>
      <KanBanContainer type="myapplicants" />
    </Wrapper>
  );
}
