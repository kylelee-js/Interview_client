// TODO:  이걸 커스텀 훅으로 만들어야하는데...

import { useState } from "react";
import {
  ApplicantActionType,
  onToggleRemoveApplicant,
  onToggleFixApplicant,
} from "../components/KanBanBoard/kanbanSlice";
import { useAppDispatch } from "../store";

export default function useMenu(props: ApplicantActionType) {
  const { isFailed, isFixed } = props;
  const [Fixed, setFixed] = useState<boolean>(isFixed);
  const [failed, setFailed] = useState<boolean>(isFailed);
  const dispatch = useAppDispatch();
  const handleFail = () => {
    dispatch(onToggleRemoveApplicant(props));
  };
  const handleFix = () => {
    dispatch(onToggleFixApplicant(props));
  };
  // const handleUnfix = () => {
  //   dispatch(onToggleFixApplicant(props));
  // };
  // const handleRollBack = () => {
  //   dispatch(onToggleRemoveApplicant(props));
  // };

  return { handleFix, handleFail };
}
