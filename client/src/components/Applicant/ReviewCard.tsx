import React, { Dispatch, useState } from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import { deleteReviewData, StatusReviewDataType } from "./reviewSlice";
import { useAppDispatch } from "../../store";
import { Divider, Typography } from "@mui/material";
import { IconButton } from "@mui/material/";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const ReviewWrapper = styled.div`
  background-color: whitesmoke;
  border-style: "";
`;

type ReviewCardPropsType = {
  id: string;
  applicantStatus: number;
  statusReviewData: StatusReviewDataType;
  userPk: number;
  setIsEditMode: Dispatch<React.SetStateAction<boolean>>;
};

export default function ReviewCard({
  id,
  applicantStatus,
  statusReviewData,
  userPk,
  setIsEditMode,
}: ReviewCardPropsType) {
  const dispatch = useAppDispatch();

  const onDeleteClick = (status: string, userId: number) => {
    dispatch(deleteReviewData({ status, id, userId }));
    setIsEditMode(false);
  };
  return (
    <ReviewWrapper>
      <Box sx={{ minWidth: 275, marginBottom: "1rem" }}>
        <Card variant="outlined">
          <CardContent>
            <Typography
              sx={{ fontSize: 12 }}
              color="text.secondary"
              gutterBottom
            >
              {applicantStatus}차 면접관
            </Typography>
            <Typography variant="h5" component="div" sx={{ fontSize: 20 }}>
              {statusReviewData.userName} - {statusReviewData.userNickname}
            </Typography>
            <Divider />
            <Typography component={"div"} sx={{ marginTop: "20px" }}>
              <div style={{ wordBreak: "break-all" }}>
                {parse(statusReviewData.reviewText)}
              </div>{" "}
            </Typography>
          </CardContent>
          <CardActions>
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
                      onDeleteClick(
                        "" + applicantStatus,
                        statusReviewData.userId!
                      )
                    }
                    size="small"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </>
            )}
          </CardActions>
        </Card>
      </Box>
    </ReviewWrapper>
  );
}
