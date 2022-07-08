import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const CardDiv = styled.div`
  width: 100px;
  height: 20px;
  background-color: grey;
  padding: 10px;
  margin: 10px;
`;

type CardProps = {
  name: string;
  index: number;
};

export default React.memo(function Card({ name, index }: CardProps) {
  // FIXME: draggableId 수정하기!!
  // TODO: key, index 부여하기
  return (
    <Draggable key={index} index={index} draggableId={"" + index}>
      {(provided) => (
        <CardDiv
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {name}
          {/* TODO: 옵션 버튼 (점 3개) 추가하기 : [지원자 태그추가, 지원자 탈락처리, 지원자 이동잠금] */}
        </CardDiv>
      )}
    </Draggable>
  );
});
