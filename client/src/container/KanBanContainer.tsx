import React, { Suspense, useEffect, useState } from "react";
import { fetchApplicants } from "../api/fetchApplicant";
import KanBan from "../components/KanBanBoard/Kanban";
import { fetchKanbanBoard } from "../components/KanBanBoard/kanbanSlice";
import { onSetPage } from "../components/KanBanBoard/pageTypeSlice";
import PoolKanBan from "../components/Pool/PoolKanbanBoard/PoolKanban";
import { fetchPoolBoard } from "../components/Pool/poolSlice";
import { useAppDispatch, useAppSelector } from "../store";

/**
 * KanBanPropsType
 * @param {string} kanbanSlice 항목에 대한 고유 식별자
 * @param {string} applicantType? 항목 아이콘
 * @param {string} title 항목 타이틀
 * @returns {boolean} 성공 여부
 */

type KanBanContainerPropsType = {
  type: string;
};
export default function KanBanContainer({ type }: KanBanContainerPropsType) {
  const kanbanBoardsData = useAppSelector((state) => state.kanban);
  const poolBoardsData = useAppSelector((state) => state.pool);
  const trigger = useAppSelector((state) => state.triggerFetch);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (type == "pool") {
      dispatch(onSetPage("pool"));
      dispatch(fetchPoolBoard());
    } else if (type == "myapplicants") {
      dispatch(onSetPage("myapplicants"));
      dispatch(fetchKanbanBoard());
    }
  }, [trigger]);

  if (type == "pool") return <PoolKanBan kanbanSlice={poolBoardsData!} />;
  else if (type == "myapplicants") {
    console.log(kanbanBoardsData);
    return (
      <Suspense fallback={<div>loading...</div>}>
        <KanBan kanbanSlice={kanbanBoardsData} />
      </Suspense>
    );
  }

  return null;
}
