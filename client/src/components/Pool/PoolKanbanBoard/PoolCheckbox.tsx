import { Alert, Checkbox, Snackbar } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React, { useEffect, useState } from "react";
import { CheckBoxDiv } from "../../../styles/boardStyle";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setApplicantMine } from "../../../api/fetchApplicant";
import { onSetMyApplicant, onUnsetMyApplicant } from "../poolSlice";
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
  const [open, setOpen] = useState(false);
  const [openOpp, setOpenOpp] = useState(false);
  const dispatch = useAppDispatch();
  const [isMine, setIsMine] = useState(
    Boolean(interviewer?.find((viewer) => viewer.pk == userPk))
  );
  const user = useAppSelector((state) => state.auth.user);

  const onSetMine = () => {
    console.log(isMine);
    if (!isMine) {
      dispatch(
        onSetMyApplicant({
          boardStatus,
          applicantIndex,
          user: user,
          isMine,
        })
      );
    } else {
      dispatch(
        onUnsetMyApplicant({
          boardStatus,
          applicantIndex,
          userPk,
          isMine,
        })
      );
    }
    setApplicantMine("" + id, !isMine);
  };

  const onCheckClick = () => {
    if (!isMine) setOpen(true);
    if (isMine) setOpen(false);
    if (!isMine) setOpenOpp(false);
    if (isMine) setOpenOpp(true);
    setIsMine((prev) => !prev);
    onSetMine();
  };

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
