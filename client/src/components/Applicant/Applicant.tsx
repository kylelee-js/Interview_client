import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store";
import ApplicantPDFViewer from "./ApplicantPDFViewer";
import ReviewAccordion from "./ReviewAccordion";
import { onInit } from "./reviewSlice";

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
  const param = useParams();
  const applicantId = param.applicantId as string;
  const dispatch = useAppDispatch();
  const applicants = useAppSelector((state) => state.applicants);
  const applicant = applicants.find(
    (applicant) => applicant.applicantInfo.applicantId == +applicantId
  );
  console.log(applicant?.applicantReview!);
  dispatch(onInit(applicant?.applicantReview!));
  // useEffect(() => {
  //   console.log(applicant?.reviews!);
  //   dispatch(onInit(applicant?.reviews!));
  // }, []);

  console.log("filePath : ", applicant?.applicantInfo.filePath);

  return (
    <Wrapper>
      {/* FIXME: 리액트 뷰어 실험 중 */}
      {/* TODO: 각 지원자 정보를 받아오는 통신은 컨테이너에서 받아온다 */}
      <ApplicantPDFViewer filePath={applicant?.applicantInfo.filePath!} />
      {/* <ApplicantPDFViewer /> */}
      <div style={{ width: "100%" }}>
        {/* FIXME: 타입 단언 제거하기 */}
        <ReviewAccordion />
      </div>
    </Wrapper>
  );
}
