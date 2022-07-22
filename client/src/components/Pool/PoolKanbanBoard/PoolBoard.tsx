import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { useAppSelector } from "../../../store";
import { ApplicantDataType } from "../../Applicant/applicantSlice";
import Card from "../../KanBanBoard/Card";
import PoolCard from "./PoolCard";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const BoardDiv = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;
  /* 드랍 보드 여유 바닥 */
  padding-bottom: 150px;
`;
const boxStyle = {
  margin: "5px",
  marginBottom: "20px",
  borderRadius: "5px",
  maxWidth: 340,
  backgroundColor: "#f2f7fa",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  display: "flex",
  alignItems: "center",
  // justifyContent: "center",

  padding: "10px 5px",
  paddingLeft: "20px",
};

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
      <Box sx={boxStyle}>
        <Typography variant="subtitle2">{name}</Typography>
      </Box>

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
