import React, { useEffect, useRef } from "react";
import { ApplicantBoardType } from "../components/KanBanBoard/kanbanSlice";

// 첫 렌더 함수 실행 제어 훅
const useDidMountEffect = (func: () => void, deps: any) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

export default useDidMountEffect;
