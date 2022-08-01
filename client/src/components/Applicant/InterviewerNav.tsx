import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { ProfileImg } from "../../styles/formStyle";
import { InterviewerDataType } from "./applicantSlice";

const Wrapper = styled.div`
  width: 90%;
  border: 0.1rem solid #cfd1d0;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #f2f7fa;
  padding: 10px 20px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.span`
  margin-top: 5px;
  padding: 5px;
`;

const InterviewerButton = styled.button`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: 12px;
  font-weight: 500;
  justify-content: center;
  line-height: 1;
  margin-top: 5;
  min-height: 0.5rem;
  padding: 5px 10px;
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:hover {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(-1px);
  }
`;

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
    // TODO: key는 pk - button으로 onClick시 모달창 - props로 정보 전달
    <Wrapper>
      {interviewers.map((interviewer) => (
        <ButtonContainer>
          <InterviewerButton
            onClick={() => {
              setInterviewerData(interviewer);
              handleClickOpen();
            }}
          >
            {interviewer.name} - {interviewer.nickname}
          </InterviewerButton>
        </ButtonContainer>
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
    </Wrapper>
  );
}
