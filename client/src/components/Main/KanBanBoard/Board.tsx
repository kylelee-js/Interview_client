import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState, useAppSelector } from "../../../store";
import Card from "./ApplicantCard";

const BoardDiv = styled.div`
  background-color: #d9dedb;
`;

export default React.memo(function Boards() {
  const fakeData = useAppSelector((state) => state.kanban);

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
