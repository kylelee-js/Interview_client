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
  // const [isFailed, setIsFailed] = useState(false);
  const dispatch = useAppDispatch();
  const handleFail = () => {
    // setIsFailed(true);
    dispatch(onRemoveApplicant({ status, applicantIndex }));
  };
  const handleFix = () => {
    // setIsFailed(true);
    dispatch(onFixApplicant({ status, applicantIndex }));
  };
  const handleUnfix = () => {
    // setIsFailed(true);
    dispatch(onUnfixApplicant({ status, applicantIndex }));
  };
  const handleRollBack = () => {
    // setIsFailed(true);
    dispatch(onRollbackApplicant({ status, applicantIndex }));
  };

  return { handleFix, handleFail, handleUnfix, handleRollBack };
}
