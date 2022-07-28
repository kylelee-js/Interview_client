import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

type TagNotePopupPropsType = {
  open: boolean;
  tagModalClose: () => void;
};

export default function TagNotePopup({
  open,
  tagModalClose,
}: TagNotePopupPropsType) {
  return (
    <Dialog open={open} onClose={tagModalClose}>
      <DialogTitle>태그 작성</DialogTitle>
      <DialogContent>
        <DialogContentText>
          지원자당 태그는 3개 까지 작성하실 수 있습니다.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="#태그작성"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={tagModalClose}>취소</Button>
        <Button onClick={tagModalClose}>작성</Button>
      </DialogActions>
    </Dialog>
  );
}
