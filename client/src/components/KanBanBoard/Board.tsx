import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useAppSelector } from "../../store";
import { BoardDiv, BoardWrapper, boxStyle } from "../../styles/boardStyle";
import { ApplicantDataType } from "../Applicant/applicantSlice";
import Card from "./Card";

type BoardPropsType = {
  name: number;
  applicants: ApplicantDataType[];
  // boardStatus를 droppableId로 주고 있다.
  droppableId: string;
};

const processStatus = [
  "미등록",
  "서류 합격",
  "1차 인터뷰",
  "2차 인터뷰",
  "최종 면접",
];
export default React.memo(function Board({
  name,
  applicants,
  droppableId,
}: BoardPropsType) {
  const type = useAppSelector((state) => state.pageType.type);
  return (
    <BoardWrapper>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <>
            <Box sx={boxStyle}>
              <Typography variant="subtitle2">{processStatus[name]}</Typography>
            </Box>
            <BoardDiv ref={provided.innerRef} {...provided.droppableProps}>
              {applicants.map((person, index) => (
                // FIXME: key는 이름이면 안돼!! -> 나중에 pk<고유값>으로 바꾸기
                <Card
                  type={"myapplicants"}
                  key={person.id}
                  // FIXME: index를 order로 교체해야한다!
                  // {person.order?}
                  applicantIndex={index}
                  boardStatus={droppableId}
                  {...applicants[index]}
                />
              ))}
              {provided.placeholder}
            </BoardDiv>
          </>
        )}
      </Droppable>
    </BoardWrapper>
  );
});
