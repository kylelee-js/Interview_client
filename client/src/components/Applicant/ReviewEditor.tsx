// Quill 에디터
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { Dispatch, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { onEdit, onReview } from "./reviewSlice";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { reviewApi } from "../../api/reviewApi";
import { useParams } from "react-router-dom";
import ReviewNullWarningPopup from "../Popup/ReviewNullWarningPopup";

const Wrapper = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  gap: 20px;
  width: 99%;
  /* max-width: 700px; */
  min-width: 300px;
  margin: 10px;
`;

type ReviewEditorPropsType = {
  id?: string;
  defaultText: string;
  applicantStatus: number;
  setIsEditMode: Dispatch<React.SetStateAction<boolean>>;
  toggler?: () => void;
  isEditMode: boolean;
};

export default function ReviewEditor({
  id,
  defaultText,
  applicantStatus,
  isEditMode,
  setIsEditMode,
  toggler,
}: ReviewEditorPropsType) {
  const { applicantId } = useParams();

  const QuillRef = useRef<ReactQuill>();
  const [review, setReview] = useState(defaultText);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const [popupOpen, setPopupOpen] = useState(false);
  const showPopup = () => setPopupOpen(true);
  const handleClose = () => setPopupOpen(false);

  const onClick = async () => {
    const text = "" + QuillRef.current?.getEditor().root.innerHTML;
    if (text == "<p><br></p>") {
      showPopup();
    } else if (isEditMode) {
      // TODO: 로컬 상태랑 서버에서 받아온 데이터 업데이트의 충돌은?
      await reviewApi.onEditReview("" + id!, {
        applicantStatus: +applicantStatus,
        applicantId: +applicantId!,
        reviewText: text,
      });
      dispatch(
        onEdit({
          applicantStatus: applicantStatus,
          statusReviewData: {
            id: id!,
            userId: user?.pk!,
            userName: user!.name,
            userNickname: user!.nickname,
            reviewText: text,
          },
        })
      );
      setIsEditMode(false);
    } else {
      const { id } = await reviewApi.onWriteReview({
        applicantStatus: +applicantStatus,
        applicantId: +applicantId!,
        reviewText: text,
      });
      dispatch(
        onReview({
          applicantStatus: applicantStatus,
          statusReviewData: {
            id: id,
            userId: user!.pk,
            userName: user!.name,
            userNickname: user!.nickname,
            reviewText: text,
          },
        })
      );
      console.log("Review write");
      setReview("");

      // 삭제시 리뷰창 닫아주는 함수
      if (toggler) {
        toggler();
      }
    }
  };

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
      <Button
        variant="contained"
        onClick={onClick}
        endIcon={<SendIcon />}
        sx={{ maxWidth: "200px" }}
      >
        제출
      </Button>
      <ReviewNullWarningPopup open={popupOpen} handleClose={handleClose} />
    </Wrapper>
  );
}
