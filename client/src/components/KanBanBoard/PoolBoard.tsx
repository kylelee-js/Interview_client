import { Typography } from "@mui/material";
import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { useAppSelector } from "../../store";
import { ApplicantDataType } from "../Applicant/applicantSlice";
import Card from "./Card";
import PoolCard from "./PoolCard";

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
  name: string;
  applicants: ApplicantDataType[];
  // boardStatus를 droppableId로 주고 있다.
  droppableId: string;
};

export default React.memo(function PoolBoard({
  name,
  applicants,
  droppableId,
}: BoardPropsType) {
  const type = useAppSelector((state) => state.pageType.type);

  return (
    <Wrapper>
      <Typography sx={{ fontSize: 18 }}>{name}</Typography>

      <BoardDiv>
        {applicants.map((person, index) => (
          // FIXME: key는 이름이면 안돼!! -> 나중에 pk<고유값>으로 바꾸기
          <PoolCard
            type={type}
            key={person.id}
            // FIXME: index를 order로 교체해야한다!
            // {person.order?}
            applicantIndex={index}
            boardStatus={droppableId}
            {...applicants[index]}
          />
        ))}
      </BoardDiv>
    </Wrapper>
  );
});
