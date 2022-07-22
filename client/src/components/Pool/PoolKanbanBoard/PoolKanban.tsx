import Board from "../../KanBanBoard/Board";
// import GeneratorBtn from "../BoardGenerator/GeneratorBtn";
import { ApplicantBoardType } from "../../KanBanBoard/kanbanSlice";
import { useAppDispatch } from "../../../store";
import styled from "styled-components";
import PoolBoard from "./PoolBoard";

const BoardGrid = styled.div<{ boardLength: number }>`
  padding: 5px 15px;
  display: grid;
  grid-template-columns: repeat(${(props) => props.boardLength}, 1fr);
  gap: 50px;
  box-sizing: border-box;
  width: 100%;
  background-color: #d9dedb;
  border-radius: 3px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
export default function PoolKanBan({ kanbanSlice }: KanBanPropsType) {
  const dispatch = useAppDispatch();

  // FIXME: 새 보드 생성 기능<GeneratorBtn /> 은 일단 개발팀만 사용한다고 판단 -> 추후 관리자 기능으로 통제가능하도록 하자
  return (
    <BoardGrid boardLength={+kanbanSlice.length}>
      {kanbanSlice.map((board) => (
        <PoolBoard
          key={board.boardName}
          droppableId={"" + board.boardStatus}
          name={board.boardName}
          applicants={board.applicants}
        />
      ))}
    </BoardGrid>
  );
}
