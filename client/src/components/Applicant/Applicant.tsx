import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchApplicantById } from "../../api/fetchApplicant";
import { useAppDispatch, useAppSelector } from "../../store";
import ApplicantPDFViewer from "./ApplicantPDFViewer";
import { onSetState } from "./applicantSlice";
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
  const [filePath, setFilePath] = useState<string>("");
  const dispatch = useAppDispatch();
  const applicants = useAppSelector((state) => state.applicants);

  // TODO: 이걸 api에서 받아오기
  useEffect(() => {
    const onFetch = async (id: string) => {
      const sampleApplicant = await fetchApplicantById(id);
      console.log("applicant", sampleApplicant);
      console.log("filePath : ", sampleApplicant.filePath);
      setFilePath(sampleApplicant.filePath);
      dispatch(onSetState(sampleApplicant));
      // TODO: 리뷰 데이터로 불러오기 -> dispatch하기
    };
    onFetch(applicantId);
  }, []);

  // const applicant = applicants.find((applicant) => {
  //   console.log(applicant, applicantId);
  //   return applicant.applicantInfo.id == +applicantId;
  // });
  // console.log(applicant?.applicantInfo!);
  // dispatch(onInit(applicant?.applicantReview!));

  // console.log("filePath : ", applicant?.applicantInfo.filePath);

  return (
    <Wrapper>
      <ApplicantPDFViewer filePath={filePath} />
      {/* <ApplicantPDFViewer /> */}
      <div style={{ width: "100%" }}>
        {/* FIXME: 타입 단언 제거하기 */}
        <ReviewAccordion />
      </div>
    </Wrapper>
  );
}
