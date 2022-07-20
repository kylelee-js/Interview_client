import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Box } from "@mui/material/";
import MuiCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import BlockIcon from "@mui/icons-material/Block";
import KebabMenu from "./KebabMenu";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ApplicantDataType } from "../Applicant/applicantSlice";
import { Tooltip } from "@mui/material";

const Wrapper = styled.div``;
const TagNote = styled.span`
  font-size: 12px;
  padding: 3px 5px;
  margin-right: 10px;
  background-color: grey;
  color: white;
  border-radius: 5px;
`;

const MenuButtonDiv = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
`;

const myPageBoards = ["서류합격", "1차합격", "2차합격", "최종합격"];
const poolPageBoards = ["개발", "마케팅", "경영지원", "디자인"];

interface CardProps extends ApplicantDataType {
  index: number;
}

export default React.memo(function Card({
  id,
  applicantName,
  index,
  tagNote = ["없음"],
  department,
  job,
  status,
  isFailed = false,
  isFixed = false,
}: CardProps) {
  // FIXME: 이것도 컨테이너로 빼야하나?
  const navigate = useNavigate();
  const onClick = (id: number) => {
    navigate(`/applicant/${id}`);
  };

  return (
    // FIXME: key는 이름이면 안돼!! -> 나중에 pk<고유값>으로 바꾸기
    <Draggable
      key={applicantName}
      index={index}
      draggableId={"" + applicantName}
      // TODO: 이 옵션 크고 끄게 할 수 있도록
      isDragDisabled={isFixed}
    >
      {(provided, snapshot) => {
        const style = {
          cursor: snapshot.isDragging ? "grab" : "auto",
          PointerEvent: "none",
          ...provided.draggableProps.style,
        };
        return (
          <Wrapper onDoubleClick={() => onClick(id)}>
            <Box
              sx={{ minWidth: 250, maxWidth: 300, position: "relative" }}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={style}
            >
              <MuiCard variant="outlined">
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {department} - {job}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {applicantName}{" "}
                    {isFailed && (
                      <Tooltip title="해당 지원자는 전형 탈락상태입니다.">
                        <BlockIcon
                          color="error"
                          sx={{ verticalAlign: "text-top" }}
                        />
                      </Tooltip>
                    )}{" "}
                    {isFixed && (
                      <Tooltip title="해당 지원자는 검토 중입니다.">
                        <LockIcon sx={{ verticalAlign: "text-top" }} />
                      </Tooltip>
                    )}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {myPageBoards[+status]}
                  </Typography>
                  <Typography variant="body2">
                    {/* well meaning and kindly. FIXME: 한줄 자기소개?
                    <br /> */}
                    {tagNote?.map((tag) => (
                      <TagNote key={tag}>#{tag}</TagNote>
                    ))}
                  </Typography>
                </CardContent>

                <MenuButtonDiv>
                  <CardActions>
                    <KebabMenu
                      id={id}
                      status={status}
                      applicantIndex={index}
                      isFailed={isFailed}
                      isFixed={isFixed}
                    />
                  </CardActions>
                </MenuButtonDiv>
              </MuiCard>
            </Box>
          </Wrapper>
        );
      }}
    </Draggable>
  );
});
