// TODO:  이걸 커스텀 훅으로 만들어야하는데...

import { useState } from "react";
import { onRemoveApplicant } from "../components/KanBanBoard/kanbanSlice";
import { useAppDispatch } from "../store";

export default function useConfirm() {
  const [isFailed, setIsFailed] = useState(false);
  const dispatch = useAppDispatch();
  const handleFail = (status: string, applicantIndex: number) => {
    // setIsFailed(true);
    dispatch(onRemoveApplicant({ status, applicantIndex }));
  };

  return { isFailed, setIsFailed, handleFail };
}
