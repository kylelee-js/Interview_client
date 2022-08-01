import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchApplicantById } from "../../api/fetchApplicant";
import { reviewApi } from "../../api/reviewApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { InterviewerDataType, onSetState } from "./applicantSlice";
import InterviewerNav from "./InterviewerNav";
import { onInitReivew, ReviewDataType } from "./reviewSlice";

// import ApplicantPDFViewer from "./ApplicantPDFViewer";
// import ReviewAccordion from "./ReviewAccordion";

const ApplicantPDFViewer = React.lazy(() => import("./ApplicantPDFViewer"));
const ReviewAccordion = React.lazy(() => import("./ReviewAccordion"));

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  gap: 60px;
`;

export default function Applicant() {
  const param = useParams();
  const applicantId = param.applicantId as string;
  const [filePath, setFilePath] = useState<string>("");
  const [amIAnAuthor, setAmIAnAuthor] = useState<boolean>(false);
  const [interviewers, setInterviewers] = useState<InterviewerDataType[]>();
  const userPk = useAppSelector((state) => state.auth.user?.pk);

  const dispatch = useAppDispatch();

  const [reviewData, setReviewData] = useState<ReviewDataType[]>([]);
  // FIXME: useAppselector로 했을 때 문제가 있지 않을까?
  useEffect(() => {
    const onFetch = async (id: string) => {
      const sampleApplicant = await fetchApplicantById(id);
      const applicantReview = await reviewApi.fetchReviewById(id);
      setInterviewers(sampleApplicant.interviewer);
      setAmIAnAuthor(
        Boolean(
          sampleApplicant.interviewer.find(
            (interviewer: number) => interviewer == userPk
          )
        )
      );
      setFilePath(sampleApplicant.filePath);
      setReviewData(applicantReview.reviewData);
      dispatch(onSetState(sampleApplicant));
      dispatch(
        onInitReivew({
          applicantId: +applicantId,
          reviewData: applicantReview.reviewData,
        })
      );
    };
    onFetch(applicantId);
  }, []);

  return (
    <Wrapper>
      <ApplicantPDFViewer filePath={filePath} />
      <div
        style={{
          width: "100%",
          margin: "20px",
          marginRight: "50px",
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* TODO: 면접관 안내 페이지 + 모달 */}
        <InterviewerNav interviewers={interviewers} />
        <ReviewAccordion reviewData={reviewData} amIAnAuthor={amIAnAuthor} />
      </div>
    </Wrapper>
  );
}
