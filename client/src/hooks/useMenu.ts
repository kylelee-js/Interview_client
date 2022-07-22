// TODO:  이걸 커스텀 훅으로 만들어야하는데...

import { useState } from "react";
import {
  onFixApplicant,
  onRemoveApplicant,
  onRollbackApplicant,
  onUnfixApplicant,
} from "../components/KanBanBoard/kanbanSlice";
import { useAppDispatch } from "../store";

export default function useMenu(status: string, applicantIndex: number) {
  const dispatch = useAppDispatch();
  const handleFail = () => {
    dispatch(onRemoveApplicant({ status, applicantIndex }));
  };
  const handleFix = () => {
    dispatch(onFixApplicant({ status, applicantIndex }));
  };
  const handleUnfix = () => {
    dispatch(onUnfixApplicant({ status, applicantIndex }));
  };
  const handleRollBack = () => {
    dispatch(onRollbackApplicant({ status, applicantIndex }));
  };

  return { handleFix, handleFail, handleUnfix, handleRollBack };
}
