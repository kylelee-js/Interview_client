import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { patchApplicanDatetById } from "../../api/fetchApplicant";
import { onDateUpdate } from "../KanBanBoard/kanbanSlice";

type DatePickerPopupPropsType = {
  open: boolean;
  applicantId: number;
  boardStatus: string;
  applicantIndex: number;
  dateModalClose: () => void;
};

export default function DatePickerPopup({
  open,
  applicantId,
  boardStatus,
  applicantIndex,
  dateModalClose,
}: DatePickerPopupPropsType) {
  const [interviewDate, setInterviewDate] = useState<Date | null>(new Date());
  const dispatch = useAppDispatch();

  const handleChange = (newValue: Date | null) => {
    setInterviewDate(newValue);
  };

  const onPatchDate = async () => {
    console.log(new Date(interviewDate!));
    await patchApplicanDatetById(
      applicantId,
      "" + new Date(interviewDate!).getTime()
    );
    dispatch(
      onDateUpdate({
        boardStatus,
        applicantIndex,
        interviewDate: "" + new Date(interviewDate!).getTime(),
      })
    );
    dateModalClose();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Dialog open={open} onClose={dateModalClose}>
        <DialogTitle>면접 일정을 선택해주세요</DialogTitle>
        <DialogContent>
          <DateTimePicker
            value={interviewDate}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={dateModalClose}>취소</Button>
          <Button onClick={onPatchDate}>선택</Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
}
