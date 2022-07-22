import React, { useCallback, useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Board from "./Board";
// import GeneratorBtn from "../BoardGenerator/GeneratorBtn";
import {
  onInBoardDrag,
  onCrossBoardDrag,
  ApplicantBoardType,
} from "./kanbanSlice";
import { useAppDispatch } from "../../store";
import styled from "styled-components";
import { onBoardUpdate } from "../../api/boardUpdate";
import useDidMountEffect from "../../hooks/useDidMountEffect";

const BoardGrid = styled.div<{ boardLength: number }>`
  padding: 5px 15px;
  display: grid;
  grid-template-columns: repeat(${(props) => props.boardLength}, 1fr);
  gap: 20px;
  width: 100%;
  background-color: #d9dedb;
`;

// Id는 보드 위치이며 Index는 카드 배열 순서이다.
export type CardCoordinateType = {
  destId: string;
  sourceId: string;
  destIndex: number;
  sourceIndex: number;
};

// TODO: 상위 컨테이너에서 가져올 props 목록
type KanBanPropsType = {
  kanbanSlice: ApplicantBoardType[];
};

// FIXME: 현재 "키값"을 "이름"으로 부여하고 있음!! -> pk값<고유값>으로 변경!!!
export default function KanBan({ kanbanSlice }: KanBanPropsType) {
  const dispatch = useAppDispatch();

  useDidMountEffect(() => {
    const onFetch = async () => {
      console.log("useEffect kanbanSlice : ", kanbanSlice);
      await onBoardUpdate(kanbanSlice);
    };
    onFetch();
  }, [kanbanSlice]);

  const onDragEnd = useCallback(
    async ({ destination, source }: DropResult) => {
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
      console.log(cardCoordinate);
      // 같은 보드 안에서 카드 드래그
      if (destination.droppableId === source.droppableId) {
        dispatch(onInBoardDrag(cardCoordinate));
      } else {
        // 다른 보드로 카드 드래그
        // TODO: 이 기능은 Pool 페이지에서는 사용불가능해야함
        dispatch(onCrossBoardDrag(cardCoordinate));
      }
    },
    [kanbanSlice]
  );

  // FIXME: 새 보드 생성 기능<GeneratorBtn /> 은 일단 개발팀만 사용한다고 판단 -> 추후 관리자 기능으로 통제가능하도록 하자
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {/* FIXME: 일단 4개 고정 */}
      <BoardGrid boardLength={+kanbanSlice.length}>
        {/* <BoardGrid boardLength={4}> */}
        {kanbanSlice.map((board) => (
          <Board
            key={board.boardName}
            droppableId={"" + board.boardStatus}
            name={board.boardStatus}
            applicants={board.applicants}
          />
        ))}
      </BoardGrid>
    </DragDropContext>
  );
}
