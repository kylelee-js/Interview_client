import React, { useState } from "react";
import styled from "styled-components";
import ApplicantPDFViewer from "./ApplicantPDFViewer";
import ApplicantReview from "./ApplicantReview";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  gap: 60px;
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
      <ApplicantReview />
    </Wrapper>
  );
}
