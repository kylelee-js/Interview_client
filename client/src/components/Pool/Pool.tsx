import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import KanBanContainer from "../../container/KanBanContainer";
export default function Pool() {
  return (
    <>
      {/* TODO: Pool 페이지에서는 다른 props를 제공해야한다 */}
      <Link to="/upload">지원자 신규 등록하기</Link>
      <KanBanContainer />
    </>
  );
}
