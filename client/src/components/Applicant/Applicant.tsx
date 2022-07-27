import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchApplicantById } from "../../api/fetchApplicant";
import { reviewApi } from "../../api/reviewApi";
import { useAppDispatch } from "../../store";
import ApplicantPDFViewer from "./ApplicantPDFViewer";
import { onSetState } from "./applicantSlice";
import ReviewAccordion from "./ReviewAccordion";
import { onInitReivew, ReviewDataType } from "./reviewSlice";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  gap: 60px;
`;

export default function Applicant() {
  const param = useParams();
  const applicantId = param.applicantId as string;
  const [filePath, setFilePath] = useState<string>("");

  const dispatch = useAppDispatch();

  const [reviewData, setReviewData] = useState<ReviewDataType[]>([]);
  // FIXME: useAppselector로 했을 때 문제가 있지 않을까?
  useEffect(() => {
    const onFetch = async (id: string) => {
      const sampleApplicant = await fetchApplicantById(id);
      const applicantReview = await reviewApi.fetchReviewById(id);
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
