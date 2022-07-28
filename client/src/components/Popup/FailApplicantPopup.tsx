import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

type FailApplicantPopupPropsType = {
  open: boolean;
  togglePopupOpen: () => void;
  removeApplicant: () => void;
  handleClose: () => void;
};
export default function FailApplicantPopup({
  open,
  togglePopupOpen,
  removeApplicant,
  handleClose,
}: FailApplicantPopupPropsType) {
  return (
    <Dialog
      open={open}
      onClose={togglePopupOpen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"해당 지원자를 탈락시키시겠습니까?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          탈락 처리된 지원자는 하단 창에서 확인하실 수 있습니다.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={removeApplicant}>탈락 처리</Button>
        <Button
          onClick={() => {
            togglePopupOpen();
            handleClose();
          }}
          autoFocus
        >
          아니오
        </Button>
      </DialogActions>
    </Dialog>
  );
}
