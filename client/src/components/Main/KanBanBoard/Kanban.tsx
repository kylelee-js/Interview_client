import React, { useCallback, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Board from "./Board";
// import GeneratorBtn from "../BoardGenerator/GeneratorBtn";
import { onCardDrag, onBoardDrag } from "./kanbanSlice";
import { useAppDispatch } from "../../../store";

export type CardCoordinateType = {
  destId: string;
  sourceId: string;
  destIndex: number;
  sourceIndex: number;
};

export default function KanBan() {
  const dispatch = useAppDispatch();

  // TODO: 여기 함수에 순서 변경 Dispatch 넣어주기
  const onDragEnd = useCallback(
    ({ destination, source, draggableId, type }: DropResult) => {
      if (!destination) {
        return;
      }

      // 같은 보드 안에서 카드 드래그
      if (destination.droppableId === source.droppableId) {
        const cardCoordinate: CardCoordinateType = {
          destId: destination.droppableId,
          sourceId: source.droppableId,
          destIndex: destination.index,
          sourceIndex: source.index,
        };
        // 리듀서에 추가할 함수 타이핑하기
        dispatch(onCardDrag(cardCoordinate));
      } else {
        // 다른 보드로 카드 드래그
        dispatch(onBoardDrag());
      }
    },
    []
  );

  // FIXME: 새 보드 생성 기능은 일단 개발팀만 사용한다고 판단 -> 추후 관리자 기능으로 통제가능하도록 하자
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {/* <GeneratorBtn /> */}
      <Board />
    </DragDropContext>
  );
}
