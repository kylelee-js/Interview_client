import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useRef, useState } from "react";
import { onPostTag } from "../../api/boardUpdate";
import { useAppDispatch } from "../../store";
import { onTagWrite } from "../KanBanBoard/kanbanSlice";

type TagNotePopupPropsType = {
  open: boolean;
  applicantId: number;
  boardStatus: string;
  applicantIndex: number;
  tagModalClose: () => void;
};

export default function TagNotePopup({
  open,
  applicantId,
  boardStatus,
  applicantIndex,
  tagModalClose,
}: TagNotePopupPropsType) {
  const [tagText, setTagText] = useState<string>("");
  const dispatch = useAppDispatch();
  const onWriteTag = async () => {
    console.log({ applicantId, boardStatus, applicantIndex, tagText: tagText });
    const res = await onPostTag(tagText, applicantId);

    const { tagId } = res;
    console.log(tagId);
    dispatch(
      onTagWrite({ boardStatus, applicantIndex, tagId, tagText: tagText })
    );

    tagModalClose();
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    setTagText(e.currentTarget.value);
  };
  return (
    <Dialog open={open} onClose={tagModalClose}>
      <DialogTitle>태그 작성</DialogTitle>
      <DialogContent>
        <DialogContentText>
          지원자당 태그는 3개 까지 작성하실 수 있습니다.
        </DialogContentText>
        <TextField
          onChange={onChange}
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
        <Button onClick={onWriteTag}>작성</Button>
      </DialogActions>
    </Dialog>
  );
}
