import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import KanBanContainer from "../../container/KanBanContainer";
import Logout from "../Login/Logout";

const Wrapper = styled.div`
  width: 100%;
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
      <KanBanContainer type="myapplicants" />
    </Wrapper>
  );
}
