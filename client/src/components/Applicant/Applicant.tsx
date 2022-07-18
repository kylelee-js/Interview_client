import React, { useState } from "react";
import styled from "styled-components";
import ApplicantPDFViewer from "./ApplicantPDFViewer";
import ReviewEdior from "./ReviewEditor";
import ReviewViewer from "./ReviewViewer";

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
      {/* TODO: 각 지원자 정보를 받아오는 통신은 컨테이너에서 받아온다 */}
      <ApplicantPDFViewer />
      <div style={{ width: "100%" }}>
        <ReviewViewer />
      </div>
    </Wrapper>
  );
}
