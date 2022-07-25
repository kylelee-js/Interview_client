import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import KanBanContainer from "../../container/KanBanContainer";
import Logout from "../Login/Logout";

const Wrapper = styled.div`
  width: 100%;
`;

export default function Pool() {
  return (
    <Wrapper>
      <KanBanContainer type="pool" />
    </Wrapper>
  );
}
