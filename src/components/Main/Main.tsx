import React, { useState } from "react";
import styled from "styled-components";
import KanBan from "./KanBanBoard/Kanban";
import Logout from "./Logout";
export default function Main() {
  return (
    <>
      <Logout />
      <KanBan />
    </>
  );
}
