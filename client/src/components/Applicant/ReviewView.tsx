import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReviewCard from "./ReviewCard";
import ReviewEditor from "./ReviewEditor";
import { ReviewDataType, StatusReviewDataType } from "./reviewSlice";

type ReviewViewPropsType = {
  id: string;
  userPk: number;
  data: ReviewDataType;
  statusReviewData: StatusReviewDataType;
};

export default React.memo(function ReviewView({
  id,
  statusReviewData,
  userPk,
  data,
}: ReviewViewPropsType) {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  return isEditMode ? (
    <ReviewEditor
      id={id}
      applicantStatus={data.applicantStatus}
      defaultText={statusReviewData.reviewText}
      isEditMode={isEditMode}
      setIsEditMode={setIsEditMode}
    />
  ) : (
    <>
      <ReviewCard
        id={id}
        applicantStatus={data.applicantStatus}
        setIsEditMode={setIsEditMode}
        userPk={userPk}
        statusReviewData={statusReviewData}
      />
    </>
  );
});
