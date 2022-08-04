import React, { Dispatch, useState } from "react";
import ReviewEditor from "./ReviewEditor";
import Button from "@mui/material/Button";

export type ReviewEditorMenuPropsType = {
  menuShown: boolean;
  applicantStatus: number;
};

export default React.memo(function ReviewEditorMenu({
  menuShown,
  applicantStatus,
}: ReviewEditorMenuPropsType) {
  const [reviewButton, setReviewButton] = useState<boolean>(true);
  const [editorShown, setEditorShown] = useState<boolean>(false);
  const toggleShownEditor = () => {
    setReviewButton((prev) => !prev);
    setEditorShown((prev) => !prev);
  };

  if (!menuShown) return null;
  return (
    <>
      <Button
        style={
          reviewButton
            ? { backgroundColor: "#66b8f2" }
            : { backgroundColor: "#a6a4a4" }
        }
        variant="contained"
        onClick={toggleShownEditor}
      >
        {reviewButton ? "리뷰 작성하기" : "리뷰창 닫기"}
      </Button>
      {editorShown && (
        <>
          <ReviewEditor
            setIsEditMode={() => {}}
            applicantStatus={applicantStatus}
            defaultText=""
            toggler={toggleShownEditor}
            isEditMode={false}
          />
        </>
      )}
    </>
  );
});
