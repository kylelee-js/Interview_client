import { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Applicant from "../components/Applicant/Applicant";
import { fetchApplicant } from "../components/Applicant/applicantSlice";
import { fetchReviewData } from "../components/Applicant/reviewSlice";
import { useAppDispatch, useAppSelector } from "../store";

export default function ApplicantContaier() {
  const param = useParams();
  const applicantId = param.applicantId as string;
  const userPk = useAppSelector((state) => state.auth.user?.pk);
  const fileData = useAppSelector(
    (state) => state.applicant.applicantInfo?.file
  );
  const reviewData = useAppSelector((state) => state.review.reviewData);
  const interviewerData = useAppSelector(
    (state) => state.applicant.applicantInfo?.interviewer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const onFetch = async () => {
      await dispatch(fetchReviewData(applicantId));
      await dispatch(fetchApplicant(applicantId));

      console.log("Asd");
    };
    onFetch();
  }, []);
  console.log(reviewData);

  if (fileData && reviewData) {
    return (
      <Suspense fallback={<div>loading...</div>}>
        <Applicant
          fileData={fileData}
          interviewers={interviewerData}
          reviewData={reviewData}
          amIAnAuthor={Boolean(
            interviewerData?.find((interviewer) => interviewer.pk == userPk)
          )}
        />
      </Suspense>
    );
  }

  return null;
}
