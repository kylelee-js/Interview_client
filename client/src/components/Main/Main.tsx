import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import KanBan from "./KanBanBoard/Kanban";
import Logout from "./Logout";
export default function Main() {
  return (
    <>
      <Logout />
      <Link to="/pool">인재 풀</Link>
      <KanBan />
    </>
  );
}
