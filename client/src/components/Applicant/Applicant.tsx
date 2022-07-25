import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchApplicantById } from "../../api/fetchApplicant";
import { reviewApi } from "../../api/reviewApi";
import { useAppDispatch, useAppSelector } from "../../store";
import ApplicantPDFViewer from "./ApplicantPDFViewer";
import { onSetState } from "./applicantSlice";
import ReviewAccordion from "./ReviewAccordion";
import { onInitReivew, ReviewDataType } from "./reviewSlice";

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
  const [reviewData, setReviewData] = useState<ReviewDataType[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const onFetch = async (id: string) => {
      const sampleApplicant = await fetchApplicantById(id);
      const applicantReview = await reviewApi.fetchReviewById(id);
      console.log(sampleApplicant.filePath);
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
        }}
      >
        <ReviewAccordion reviewData={reviewData} />
      </div>
    </Wrapper>
  );
}
