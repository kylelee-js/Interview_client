import React from "react";
import styled from "styled-components";
import { InterviewerDataType } from "./applicantSlice";
import InterviewerNav from "./InterviewerNav";
import { ReviewDataType } from "./reviewSlice";

const ApplicantPDFViewer = React.lazy(() => import("./ApplicantPDFViewer"));
const ReviewAccordion = React.lazy(() => import("./ReviewAccordion"));

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  gap: 60px;
`;

const ReviewSectionDiv = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  margin: 20px;
  margin-right: 50px;
  align-items: center;
  flex-direction: column;
`;

export type ApplicantPropsType = {
  filePath: string;
  interviewers: InterviewerDataType[] | undefined;
  reviewData: ReviewDataType[];
  amIAnAuthor: boolean;
};

export default function Applicant(props: ApplicantPropsType) {
  const { filePath, interviewers, reviewData, amIAnAuthor } = props;
  return (
    <Wrapper>
      <ApplicantPDFViewer filePath={filePath} />
      <ReviewSectionDiv>
        <InterviewerNav interviewers={interviewers} />
        <ReviewAccordion reviewData={reviewData} amIAnAuthor={amIAnAuthor} />
      </ReviewSectionDiv>
    </Wrapper>
  );
}
