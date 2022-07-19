import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReviewCard from "./ReviewCard";
import ReviewEditor from "./ReviewEditor";
import ReviewEditorMenu, {
  ReviewEditorMenuPropsType,
} from "./ReviewEditorMenu";
import { ReviewDataType, StatusReviewDataType } from "./reviewSlice";

type ReviewViewPropsType = {
  userPk: number;
  data: ReviewDataType;
  statusReviewData: StatusReviewDataType;
};

export default React.memo(function ReviewView({
  statusReviewData,
  userPk,
  data,
}: ReviewViewPropsType) {
  const [isReviewExist, setIsReviewExist] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  useEffect(() => {
    if (statusReviewData.userName == null) {
      setIsReviewExist(false);
    } else {
      setIsReviewExist(true);
    }
  }, []);

  return isReviewExist ? (
    isEditMode ? (
      <ReviewEditor
        applicantStatus={data.applicantStatus}
        defaultText={statusReviewData.reviewText}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
      />
    ) : (
      <>
        <ReviewCard
          applicantStatus={data.applicantStatus}
          setIsEditMode={setIsEditMode}
          userPk={userPk}
          statusReviewData={statusReviewData}
        />
      </>
    )
  ) : (
    <>
      <div>아직 리뷰가 없습니다.</div>
    </>
  );
});
