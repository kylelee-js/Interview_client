import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import KanBan from "./KanBanBoard/Kanban";
import Logout from "./Logout";

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
        <Link to="/applicant">지원서 보러가기</Link>
      </AdHocMenu>
      <KanBan />
    </>
  );
}
