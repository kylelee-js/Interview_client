import React, { Dispatch, useState } from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { onRemove, StatusReviewDataType } from "./reviewSlice";
import { useAppDispatch } from "../../store";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material/";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Tooltip } from "@mui/material";

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
      {/* TODO: 작성자 이름 + 호 */}
      {statusReviewData.userName}
      <div>
        <Typography>{parse(statusReviewData.reviewText)}</Typography>
        {userPk == statusReviewData.userId && (
          <>
            <Tooltip title="리뷰 수정하기">
              <IconButton
                aria-label="edit"
                onClick={() => setIsEditMode(true)}
                size="small"
              >
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="리뷰 삭제하기">
              <IconButton
                aria-label="delete"
                onClick={() =>
                  onDeleteClick(applicantStatus, statusReviewData.userId!)
                }
                size="small"
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </>
        )}
      </div>
    </>
  );
}
