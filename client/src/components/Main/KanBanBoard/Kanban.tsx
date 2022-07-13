import React, { useCallback, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Board from "./Board";
// import GeneratorBtn from "../BoardGenerator/GeneratorBtn";
import { onInBoardDrag, onCrossBoardDrag } from "./kanbanSlice";
import { useAppDispatch, useAppSelector } from "../../../store";
import styled from "styled-components";

const BoardGrid = styled.div`
  padding: 5px 15px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  background-color: #d9dedb;
`;

// Id는 보드 위치이며 Index는 카드 배열 순서이다.
export type CardCoordinateType = {
  destId: string;
  sourceId: string;
  destIndex: number;
  sourceIndex: number;
};

// FIXME: 현재 "키값"을 "이름"으로 부여하고 있음!! -> pk값<고유값>으로 변경!!!
export default function KanBan() {
  const fakeBoards = useAppSelector((state) => state.kanban);
  const dispatch = useAppDispatch();

  // params에 draggableId, type도 있음
  const onDragEnd = useCallback(({ destination, source }: DropResult) => {
    if (!destination) {
      return;
    }
    // 카드 이동좌표 정보
    const cardCoordinate: CardCoordinateType = {
      destId: destination.droppableId,
      sourceId: source.droppableId,
      destIndex: destination.index,
      sourceIndex: source.index,
    };
    // 같은 보드 안에서 카드 드래그
    if (destination.droppableId === source.droppableId) {
      dispatch(onInBoardDrag(cardCoordinate));
    } else {
      // 다른 보드로 카드 드래그
      dispatch(onCrossBoardDrag(cardCoordinate));
    }
  }, []);

  // FIXME: 새 보드 생성 기능<GeneratorBtn /> 은 일단 개발팀만 사용한다고 판단 -> 추후 관리자 기능으로 통제가능하도록 하자
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <BoardGrid>
        {fakeBoards.map((board, index) => (
          <Board
            key={board.boardName}
            droppableId={"" + board.boardId}
            index={index}
            name={board.boardName}
            contents={board.contents}
          />
        ))}
      </BoardGrid>
    </DragDropContext>
  );
}
