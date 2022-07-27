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
import useDidMountEffect from "../../hooks/useDidMountEffect";
import { patchApplicantById } from "../../api/fetchApplicant";
import { BoardGrid } from "../../styles/boardStyle";

// Id는 보드 위치이며 Index는 카드 배열 순서이다.
export type CardCoordinateType = {
  destId: string;
  sourceId: string;
  destIndex: number;
  sourceIndex: number;
};

export type ApplicantCoordinateType = {
  id: number;
  status: number;
  index: number;
  prevBoardPk: number;
  boardPk: number;
};

// TODO: 상위 컨테이너에서 가져올 props 목록
type KanBanPropsType = {
  kanbanSlice: ApplicantBoardType[];
};

// FIXME: 현재 "키값"을 "이름"으로 부여하고 있음!! -> pk값<고유값>으로 변경!!!
export default function KanBan({ kanbanSlice }: KanBanPropsType) {
  const dispatch = useAppDispatch();
  const [applicantCoordinate, setApplicantCoordinate] =
    useState<ApplicantCoordinateType>();

  useDidMountEffect(() => {
    const onFetch = async () => {
      // TODO: applicantId 찾기
      await patchApplicantById(applicantCoordinate!);
    };
    onFetch();
  }, [applicantCoordinate]);

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

      // x: status, y: index
      setApplicantCoordinate({
        id: kanbanSlice[+source.droppableId - 1].applicants[source.index].id,
        status: +destination.droppableId,
        index: destination.index,
        prevBoardPk: kanbanSlice[+source.droppableId - 1].pk,
        boardPk: kanbanSlice[+destination.droppableId - 1].pk,
      });

      // 같은 보드 안에서 카드 드래그
      if (destination.droppableId === source.droppableId) {
        dispatch(onInBoardDrag(cardCoordinate));
      } else {
        // 다른 보드로 카드 드래그
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
            key={board.pk}
            droppableId={"" + board.boardStatus}
            name={board.boardStatus}
            applicants={board.applicants}
          />
        ))}
      </BoardGrid>
    </DragDropContext>
  );
}
