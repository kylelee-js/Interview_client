import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
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
  const [src, setSrc] = useState<string>("");
  const ref = useRef<HTMLImageElement>(null);
  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    const onFetch = async () => {
      const url = await fetch(
        interviewerData?.image.slice(0, 18) +
          ":8080" +
          interviewerData?.image.slice(18),
        // interviewerData?.image!,
        {
          headers: new Headers({
            Authorization: `${axios.defaults.headers.common["Authorization"]}`,
          }),
        }
      )
        .then((res) => res.blob())
        .then((blob) => {
          console.log(URL.createObjectURL(blob));
          return URL.createObjectURL(blob);
        });
      setSrc(url);
    };
    onFetch();
  }, [interviewerData]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/default.png";
  };

  if (!interviewers) return null;
  return (
    <InterviewerNavWrapper>
      {interviewers.map((interviewer) => (
        <InterviewerContainer key={interviewer.pk}>
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
            <ProfileImg
              ref={ref}
              src={src}
              alt="면접관 사진"
              onError={handleError}
            />
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
