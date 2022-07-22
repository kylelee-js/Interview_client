import { Typography } from "@mui/material";
import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { useAppSelector } from "../../store";
import { ApplicantDataType } from "../Applicant/applicantSlice";
import Card from "./Card";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoardDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d9dedb;
  gap: 10px;
  /* 드랍 보드 여유 바닥 */
  padding-bottom: 150px;
`;

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
    <Wrapper>
      <Typography sx={{ fontSize: 18 }}>{processStatus[name]}</Typography>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <BoardDiv ref={provided.innerRef} {...provided.droppableProps}>
            {applicants.map((person, index) => (
              // FIXME: key는 이름이면 안돼!! -> 나중에 pk<고유값>으로 바꾸기
              <Card
                type={type}
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
        )}
      </Droppable>
    </Wrapper>
  );
});
