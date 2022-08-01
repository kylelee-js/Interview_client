import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import { ProfileImg } from "../../styles/formStyle";
import {
  InterviewerButton,
  InterviewerContainer,
  InterviewerNavWrapper,
} from "../../styles/reviewViewerStyle";
import { InterviewerDataType } from "./applicantSlice";

type InterviewerNavPropsType = {
  interviewers: InterviewerDataType[] | undefined;
};

export default function InterviewerNav({
  interviewers,
}: InterviewerNavPropsType) {
  const [interviewerData, setInterviewerData] = useState<InterviewerDataType>();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!interviewers) return null;
  return (
    <InterviewerNavWrapper>
      {interviewers.map((interviewer) => (
        <InterviewerContainer>
          <InterviewerButton
            onClick={() => {
              setInterviewerData(interviewer);
              handleClickOpen();
            }}
          >
            {interviewer.name} - {interviewer.nickname}
          </InterviewerButton>
        </InterviewerContainer>
      ))}

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullWidth={true}
      >
        <DialogTitle id="scroll-dialog-title">
          {interviewerData?.name} - {interviewerData?.nickname}
        </DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            {/* TODO: 면접관 사진 보이기 */}
            <ProfileImg src={interviewerData?.image} alt="면접관 사진" />
            <p>Email : {interviewerData?.email}</p>
            <p>부서 : {interviewerData?.department}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>확인</Button>
        </DialogActions>
      </Dialog>
    </InterviewerNavWrapper>
  );
}
