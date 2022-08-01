import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApplicantById } from "../api/fetchApplicant";
import { reviewApi } from "../api/reviewApi";
import Applicant, {
  ApplicantPropsType,
} from "../components/Applicant/Applicant";
import {
  InterviewerDataType,
  onSetState,
} from "../components/Applicant/applicantSlice";
import {
  onInitReivew,
  ReviewDataType,
} from "../components/Applicant/reviewSlice";
import { useAppDispatch, useAppSelector } from "../store";

export default function ApplicantContaier() {
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

  const applicantProps: ApplicantPropsType = {
    filePath,
    interviewers,
    reviewData,
    amIAnAuthor,
  };
  return <Applicant {...applicantProps} />;
}
