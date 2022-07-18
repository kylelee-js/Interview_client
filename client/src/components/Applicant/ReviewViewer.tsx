import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store";
import parse from "html-react-parser";
import ReviewEditor from "./ReviewEditor";
import { onRemove } from "./reviewSlice";

const ReviewDiv = styled.div``;

export default function ReviewViewer() {
  const [editorShown, setEditorShown] = useState<boolean>(false);
  const [editShown, setEditShown] = useState<boolean>(true);
  const [reviewButton, setReviewButton] = useState<boolean>(true);
  const [isReviewExist, setIsReviewExist] = useState<boolean>(true);
  const reviewData = useAppSelector((state) => state.review);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (reviewData.find((review) => review.id == user?.pk)) {
      console.log("upload");
      setEditShown(false);
      setEditorShown(false);
    }
    if (reviewData.length == 1 && reviewData[0].name == null) {
      setIsReviewExist(false);
    } else {
      setIsReviewExist(true);
    }
  }, [reviewData]);

  const toggleShownEditor = () => {
    setReviewButton((prev) => !prev);
    setEditorShown((prev) => !prev);
  };
  const onEditClick = (id: number) => {
    setIsEdit(true);
  };
  const onDeleteClick = (id: number) => {
    dispatch(onRemove({ id }));
  };
  return (
    <>
      {isReviewExist ? (
        reviewData.map((review) => {
          return isEdit && review.id == user?.pk ? (
            <ReviewEditor
              key={review.id}
              defaultText={review.review}
              isEdit={true}
              setisEdit={setIsEdit}
            />
          ) : (
            <ReviewDiv key={review.id}>
              {review.name}
              <div>
                {parse(review.review)}

                {review.id == user?.pk && (
                  <>
                    <button onClick={() => onEditClick(review.id as number)}>
                      리뷰 수정하기
                    </button>
                    <button onClick={() => onDeleteClick(review.id as number)}>
                      리뷰 삭제하기
                    </button>
                  </>
                )}
              </div>
            </ReviewDiv>
          );
        })
      ) : (
        <>아직 리뷰가 없습니다.</>
      )}
      {editShown && (
        <button onClick={toggleShownEditor}>
          {reviewButton ? "리뷰 작성하기" : "리뷰창 닫기"}
        </button>
      )}
      {editorShown && (
        <ReviewEditor defaultText="" isEdit={false} setisEdit={setIsEdit} />
      )}
    </>
  );
}
