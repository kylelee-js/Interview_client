import React, { useState } from "react";
import KanBan from "../components/KanBanBoard/Kanban";
import { useAppDispatch, useAppSelector } from "../store";

const myPageBoards = ["서류합격", "1차합격", "2차합격", "최종합격"];
const poolPageBoards = ["개발", "마케팅", "경영지원", "디자인"];

/**
 * KanBanPropsType
 * @param {string} boardType 항목에 대한 고유 식별자
 * @param {string} applicantType? 항목 아이콘
 * @param {string} title 항목 타이틀
 * @param {function} callback 실행에 대한 호출 함수
 * @returns {boolean} 성공 여부
 */
export default function KanBanContainer() {
  const fakeBoards = useAppSelector((state) => state.kanban);
  const dispatch = useAppDispatch();
  // const
  // TODO: 여기서 각기 다른 props 제공 -> 마이페이지는 나의 지원자들과 + 보드 상태
  // Pool에서는 모든 지원자들과 부서 상태
  // 여기서 모든 정보들을 받고 통신할 리듀서도 제공?
  return <KanBan kanbanSlice={fakeBoards} />;

  // return <KanBan boardType={myPageBoards}/>;
}
