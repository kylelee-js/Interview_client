import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import KanBanContainer from "../../container/KanBanContainer";
import Logout from "../Login/Logout";

const AdHocMenu = styled.div`
  padding: 5px;
  display: flex;
  gap: 20px;
  background-color: whitesmoke;
`;

export default function Main() {
  return (
    <>
      <Logout />
      <AdHocMenu>
        <Link to="/pool">인재 풀 보러가기</Link>
      </AdHocMenu>
      <KanBanContainer />
    </>
  );
}
