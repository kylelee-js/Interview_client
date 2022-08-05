import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../store";
import { BoardDiv, BoardWrapper, boxStyle } from "../../../styles/boardStyle";
import { ApplicantDataType } from "../../Applicant/applicantSlice";
import PoolCard from "./PoolCard";

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
    <BoardWrapper>
      <Box sx={boxStyle}>
        <Typography variant="subtitle2">{name}</Typography>
      </Box>

      <BoardDiv>
        {applicants.map((person, index) => (
          // FIXME: key는 이름이면 안돼!! -> 나중에 pk<고유값>으로 바꾸기
          <PoolCard
            type={"pool"}
            key={person.id}
            // FIXME: index를 order로 교체해야한다!
            // {person.order?}
            applicantIndex={index}
            boardStatus={droppableId}
            {...applicants[index]}
          />
        ))}
      </BoardDiv>
    </BoardWrapper>
  );
});
