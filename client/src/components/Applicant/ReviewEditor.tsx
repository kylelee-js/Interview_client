// Quill 에디터
import styled from "styled-components";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { ReactHTMLElement, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { onEdit, onReview } from "./reviewSlice";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Wrapper = styled.div`
  /* display: flex; */
  width: 100%;
  max-width: 700px;
  min-width: 300px;
  margin: 10px;
`;

// TODO: 스타일링하기
const popupStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type ReviewEditorPropsType = {
  defaultText: string;
  isEdit: boolean;
  setisEdit: (isEdit: boolean) => void;
};

export default function ReviewEditor({
  defaultText,
  isEdit,
  setisEdit,
}: ReviewEditorPropsType) {
  const QuillRef = useRef<ReactQuill>();
  const [review, setReview] = useState(defaultText);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const [popupOpen, setPopupOpen] = useState(false);
  const handleOpen = () => setPopupOpen(true);
  const handleClose = () => setPopupOpen(false);

  const onClick = () => {
    const text = "" + QuillRef.current?.getEditor().root.innerHTML;
    if (text == "<p><br></p>") {
      handleOpen();
    } else if (isEdit) {
      dispatch(onEdit({ id: user!.pk, name: user!.name, review: text }));
      setisEdit(false);
    } else {
      dispatch(onReview({ id: user!.pk, name: user!.name, review: text }));
      setReview("");
    }
  };

  useEffect(() => {}, []);

  return (
    <Wrapper>
      {/* min-height는 글로벌 스타일에서 정의되어 있음! */}
      <ReactQuill
        ref={(element) => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        // value={review}
        defaultValue={review}
        placeholder="공정한 리뷰를 작성해주세요."
      />
      <button onClick={onClick}>작성</button>
      <Modal
        open={popupOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={popupStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            리뷰를 작성하고 제출해주세요.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            빈칸으로 작성된 리뷰는 제출될 수 없습니다.
          </Typography>
        </Box>
      </Modal>
    </Wrapper>
  );
}
