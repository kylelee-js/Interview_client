import React, { Dispatch, useState } from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { onRemove, StatusReviewDataType } from "./reviewSlice";
import { useAppDispatch } from "../../store";
import { Typography } from "@mui/material";

type ReviewCardPropsType = {
  applicantStatus: string;
  statusReviewData: StatusReviewDataType;
  userPk: number;
  setIsEditMode: Dispatch<React.SetStateAction<boolean>>;
};

export default function ReviewCard({
  applicantStatus,
  statusReviewData,
  userPk,
  setIsEditMode,
}: ReviewCardPropsType) {
  const dispatch = useAppDispatch();

  const onDeleteClick = (status: string, id: number) => {
    dispatch(onRemove({ status, id }));
    setIsEditMode(false);
  };
  return (
    <>
      {statusReviewData.userName}
      <div>
        <Typography>{parse(statusReviewData.reviewText)}</Typography>
        {userPk == statusReviewData.userId && (
          <>
            <button onClick={() => setIsEditMode(true)}>리뷰 수정하기</button>
            <button
              onClick={() =>
                onDeleteClick(applicantStatus, statusReviewData.userId!)
              }
            >
              리뷰 삭제하기
            </button>
          </>
        )}
      </div>
    </>
  );
}
