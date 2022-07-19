import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import ReviewEditor from "./ReviewEditor";

export type ReviewEditorMenuPropsType = {
  menuShown: boolean;
  applicantStatus: string;
  setIsEditMode: Dispatch<React.SetStateAction<boolean>>;
};

export default React.memo(function ReviewEditorMenu({
  menuShown,
  applicantStatus,
  setIsEditMode,
}: ReviewEditorMenuPropsType) {
  const [reviewButton, setReviewButton] = useState<boolean>(true);
  const [editorShown, setEditorShown] = useState<boolean>(false);
  const toggleShownEditor = () => {
    setReviewButton((prev) => !prev);
    setEditorShown((prev) => !prev);
  };

  useEffect(() => {
    console.log();
  }, []);

  if (!menuShown) return null;
  return (
    <>
      <button onClick={toggleShownEditor}>
        {reviewButton ? "리뷰 작성하기" : "리뷰창 닫기"}
      </button>
      {editorShown && (
        <>
          <ReviewEditor
            setIsEditMode={setIsEditMode}
            applicantStatus={applicantStatus}
            defaultText=""
            isEditMode={false}
          />
        </>
      )}
    </>
  );
});
