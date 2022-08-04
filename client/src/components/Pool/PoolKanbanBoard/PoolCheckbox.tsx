import { Alert, Checkbox, Snackbar } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React, { useEffect, useState } from "react";
import { CheckBoxDiv } from "../../../styles/boardStyle";
import { useAppDispatch } from "../../../store";
import { setApplicantMine } from "../../../api/fetchApplicant";
import { onToggleMyApplicant } from "../poolSlice";
import { InterviewerDataType } from "../../Applicant/applicantSlice";

type PoolCheckboxPropsType = {
  id: number;
  boardStatus: string;
  applicantIndex: number;
  userPk: number;
  interviewer: InterviewerDataType[];
};
export default function PoolCheckbox({
  id,
  boardStatus,
  applicantIndex,
  userPk,
  interviewer,
}: PoolCheckboxPropsType) {
  // TODO: 기본값은 isMine을 따른다 Alert 띄우는 모달
  const [open, setOpen] = useState(false);
  const [openOpp, setOpenOpp] = useState(false);
  const dispatch = useAppDispatch();
  const [isMine, setIsMine] = useState(false);

  const onSetMine = () => {
    if (!isMine) {
      dispatch(
        onToggleMyApplicant({ boardStatus, applicantIndex, userPk, isMine })
      );
    } else {
      dispatch(
        onToggleMyApplicant({ boardStatus, applicantIndex, userPk, isMine })
      );
    }
    setApplicantMine("" + id, !isMine);
  };

  const onCheckClick = () => {
    // TODO:  set Toggler - 지금 개판임..
    if (!isMine) setOpen(true);
    if (isMine) setOpen(false);
    if (!isMine) setOpenOpp(false);
    if (isMine) setOpenOpp(true);
    setIsMine((prev) => !prev);
    onSetMine();
  };

  useEffect(() => {
    if (interviewer?.find((viewer) => viewer.pk == userPk)) {
      setIsMine(true);
    } else {
      setIsMine(false);
    }
  }, []);

  return (
    <CheckBoxDiv>
      <Checkbox
        checked={isMine}
        color="default"
        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
        onClick={onCheckClick}
      />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
      >
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          해당 지원자의 면접관으로 등록하셨습니다.
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openOpp}
        onClose={() => setOpenOpp(false)}
        autoHideDuration={2000}
      >
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="info">
          해당 지원자의 면접관 등록을 해제하셨습니다.
        </Alert>
      </Snackbar>
    </CheckBoxDiv>
  );
}
