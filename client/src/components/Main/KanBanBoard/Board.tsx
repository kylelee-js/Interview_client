import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../../store";
import Card from "./Card";

const BoardDiv = styled.div`
  background-color: #d9dedb;
`;

export default React.memo(function Boards() {
  const fakeData = useSelector((state: RootState) => state.kanban);

  // FIXME: droppableId 수정하기!!
  return (
    <Droppable droppableId="1">
      {(provided) => (
        <BoardDiv ref={provided.innerRef} {...provided.droppableProps}>
          {fakeData.map((person, index) => (
            <Card key={person.id} index={index} name={person.name} />
          ))}

          {provided.placeholder}
        </BoardDiv>
      )}
    </Droppable>
  );
});
