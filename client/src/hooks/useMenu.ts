// TODO:  이걸 커스텀 훅으로 만들어야하는데...

import { useState } from "react";
import { updateApplicantFixAndFailById } from "../api/fetchApplicant";
import {
  onToggleRemoveApplicant,
  onToggleFixApplicant,
} from "../components/KanBanBoard/kanbanSlice";
import {
  onToggleFixApplicantSearch,
  onToggleRemoveApplicantSearch,
} from "../components/Search/searchSlice";
import { useAppDispatch, useAppSelector } from "../store";

type useMenuPropsType = {
  id: number;
  status: string;
  applicantIndex: number;
  isFailed: boolean;
  isFixed: boolean;
};
export default function useMenu({
  id,
  status,
  applicantIndex,
  isFailed,
  isFixed,
}: useMenuPropsType) {
  const type = useAppSelector((state) => state.pageType.type);
  // const [Fixed, setFixed] = useState<boolean>(isFixed);
  // const [failed, setFailed] = useState<boolean>(isFailed);
  const dispatch = useAppDispatch();
  const handleFail = async () => {
    if (type == "myapplicants") {
      dispatch(
        onToggleRemoveApplicant({ status, applicantIndex, isFailed, isFixed })
      );
    } else if (type == "search") {
      dispatch(onToggleRemoveApplicantSearch({ applicantIndex, isFailed }));
    }
    await updateApplicantFixAndFailById(id, !isFailed, !isFailed);
  };
  const handleFix = async () => {
    if (type == "myapplicants") {
      dispatch(
        onToggleFixApplicant({ status, applicantIndex, isFailed, isFixed })
      );
    } else if (type == "search") {
      dispatch(onToggleFixApplicantSearch({ applicantIndex, isFailed }));
    }
    await updateApplicantFixAndFailById(id, !isFixed, isFailed);
  };
  return { handleFix, handleFail };
}
