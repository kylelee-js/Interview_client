import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { onPostTag } from "../../api/boardApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { TagDataType } from "../Applicant/applicantSlice";
import { onTagWrite } from "../KanBanBoard/kanbanSlice";
import { onTagWrite as onTagWritePool } from "../Pool/poolSlice";
import { onTagWriteSearch } from "../Search/searchSlice";

type TagNotePopupPropsType = {
  open: boolean;
  applicantId: number;
  boardStatus: string;
  applicantIndex: number;
  tags: TagDataType[] | undefined;
  tagModalClose: () => void;
};

export default function TagNotePopup({
  open,
  applicantId,
  boardStatus,
  applicantIndex,
  tags,
  tagModalClose,
}: TagNotePopupPropsType) {
  const [overlapAlert, setOverlapAlert] = useState<boolean>(false);
  const handleClose = () => {
    setOverlapAlert(false);
  };

  const [tagText, setTagText] = useState<string>("");
  const type = useAppSelector((state) => state.pageType.type);
  const dispatch = useAppDispatch();
  const onWriteTag = async () => {
    const overlap = tags?.find((tag) => tag.tagText == tagText);
    if (overlap) {
      setOverlapAlert(true);
    } else {
      setOverlapAlert(false);
      console.log({
        applicantId,
        boardStatus,
        applicantIndex,
        tagText: tagText,
      });
      // FIXME: 이것도 createAsyncThunk로 리팩토링?
      const res = await onPostTag(tagText, applicantId);
      const { tagId } = res;
      if (type == "myapplicants") {
        dispatch(
          onTagWrite({ boardStatus, applicantIndex, tagId, tagText: tagText })
        );
      } else if (type == "pool") {
        dispatch(
          onTagWritePool({
            boardStatus,
            applicantIndex,
            tagId,
            tagText: tagText,
          })
        );
      } else if (type == "search") {
        dispatch(
          onTagWriteSearch({
            applicantIndex,
            tagId,
            tagText: tagText,
          })
        );
      }

      tagModalClose();
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagText(e.currentTarget.value);
  };
  return (
    <>
      <Dialog open={open} onClose={tagModalClose}>
        <DialogTitle>태그 작성</DialogTitle>
        <DialogContent>
          <DialogContentText>
            지원자당 태그는 3개까지 작성하실 수 있습니다.
          </DialogContentText>
          <TextField
            inputProps={{ maxLength: 8 }}
            helperText="태그는 8글자까지 가능합니다."
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

      {/* 중복 알림 */}
      <Dialog open={overlapAlert} onClose={handleClose}>
        <DialogTitle>태그 중복 발생</DialogTitle>
        <DialogContent>
          <DialogContentText>
            중복된 태그는 작성하실 수 없습니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>다시 작성</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
