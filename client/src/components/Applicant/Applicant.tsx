import React, { useState } from "react";
import styled from "styled-components";
import ApplicantPDFViewer from "./ApplicantPDFViewer";

const Wrapper = styled.div`
  display: flex;

  height: 100%;
  width: 100%;
`;
const Box = styled.div`
  background-color: green;
  height: 200px;
  width: 100%;
`;

export default function Applicant() {
  return (
    <Wrapper>
      {/* FIXME: 리액트 뷰어 실험 중 */}
      <ApplicantPDFViewer />
      <Box></Box>
    </Wrapper>
  );
}
