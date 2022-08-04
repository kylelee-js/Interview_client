// TODO:  이걸 커스텀 훅으로 만들어야하는데...

import { useState } from "react";
import {
  ApplicantActionType,
  onToggleRemoveApplicant,
  onToggleFixApplicant,
} from "../components/KanBanBoard/kanbanSlice";
import {
  onToggleFixApplicantSearch,
  onToggleRemoveApplicantSearch,
} from "../components/Search/searchSlice";
import { useAppDispatch, useAppSelector } from "../store";

export default function useMenu(props: ApplicantActionType) {
  const type = useAppSelector((state) => state.pageType.type);
  const { isFailed, isFixed } = props;
  const [Fixed, setFixed] = useState<boolean>(isFixed);
  const [failed, setFailed] = useState<boolean>(isFailed);
  const dispatch = useAppDispatch();
  const handleFail = () => {
    if (type == "myapplicants") {
      dispatch(onToggleRemoveApplicant(props));
    } else if (type == "search") {
      const { applicantIndex, isFailed } = props;
      dispatch(onToggleRemoveApplicantSearch({ applicantIndex, isFailed }));
    }
  };
  const handleFix = () => {
    if (type == "myapplicants") {
      dispatch(onToggleFixApplicant(props));
    } else if (type == "search") {
      const { applicantIndex, isFixed } = props;
      dispatch(onToggleFixApplicantSearch({ applicantIndex, isFailed }));
    }
  };
  return { handleFix, handleFail };
}
