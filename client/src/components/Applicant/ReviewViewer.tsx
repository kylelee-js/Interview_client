import React, { useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../store";
import parse from "html-react-parser";
import ReviewEditor from "./ReviewEditor";
export default function ReviewViewer() {
  const [editorShown, setEditorShown] = useState<boolean>(false);
  const [editShown, setEditShown] = useState<boolean>(false);

  const toggleShown = () => {
    setEditorShown((prev) => !prev);
  };
  const reviewData = useAppSelector((state) => state.review);
  // FIXME: 초기 initialState가 렌더 되고 있음...
  // reviewData.shift();
  console.log(reviewData);

  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    // FIXME: 유니크 키가 있으면 그냥 reviewSlice에서 값으로 가져오면 그만인데..
    console.log(event.currentTarget.parentElement?.childNodes[0]);
  };
  const onClickTwo = (index: number) => {
    setEditorShown(false);
    setEditShown(true);
    console.log(reviewData[index].review);
  };
  return (
    <>
      {reviewData.length == 0 ? (
        <>아직 리뷰가 없습니다.</>
      ) : (
        reviewData.map((review, index) => (
          // FIXME: unique key 부여하기
          <>
            {review.name}
            <div>
              {editShown ? <ReviewEditor /> : <div>{parse(review.review)}</div>}

              <button onClick={onClick}>리뷰 수정하기 by target</button>
              <button onClick={() => onClickTwo(index)}>
                리뷰 수정하기 by id
              </button>
            </div>
          </>
        ))
      )}

      <button onClick={toggleShown}>리뷰 작성하기</button>
      {editorShown && <ReviewEditor />}
    </>
  );
}
