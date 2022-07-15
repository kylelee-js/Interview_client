import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card from "./Card";
import { ApplicantCardType } from "./kanbanSlice";

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
  index: number;
  contents: ApplicantCardType[];
  droppableId: string;
};

export default React.memo(function Board({
  name,
  contents,
  droppableId,
}: BoardPropsType) {
  return (
    <Wrapper>
      <b>{name}</b>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <BoardDiv ref={provided.innerRef} {...provided.droppableProps}>
            {contents.map((person, index) => (
              // FIXME: key는 이름이면 안돼!! -> 나중에 pk<고유값>으로 바꾸기
              <Card
                key={person.name}
                index={index}
                // name={person.name}
                // status={person.status}
                // tags={person.tagNote}
                {...contents[index]}
              />
            ))}
            {provided.placeholder}
          </BoardDiv>
        )}
      </Droppable>
    </Wrapper>
  );
});
