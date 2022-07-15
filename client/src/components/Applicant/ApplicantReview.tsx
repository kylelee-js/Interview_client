// Quill 에디터
import styled from "styled-components";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { ReactHTMLElement, useRef, useState } from "react";
import { useAppDispatch } from "../../store";
import { onReview } from "./ApplicantSlice";

const Wrapper = styled.div`
  /* display: flex; */
  width: 100%;
  max-width: 700px;
  min-width: 300px;
`;

// TODO: 위에는 기존의 평가를 확인하는 뷰어를 제공해야함!
export default function ApplicantReviewEditor() {
  const QuillRef = useRef<ReactQuill>();
  const [review, setReview] = useState("");
  const dispatch = useAppDispatch();

  const onClick = () => {
    // TODO: 제출 시 useRef를 통해 내용 빈칸으로 만들기
    const text = "" + QuillRef.current?.getEditor().root.innerHTML;
    // const text = "" + QuillRef.current?.getEditor().getText();
    dispatch(onReview({ id: 12, name: "문복", review: text }));
  };
  const onChange = (content: string) => {
    // console.log(content);
    // setReview(content);
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
        value={review}
        // onChange={(content, delta, source, editor) =>
        //   onChange(editor.getHTML())
        // }
        // onChange={(editor) => setReview(editor)}
        placeholder="공정한 리뷰를 작성해주세요."
      />
      <button onClick={onClick}>작성</button>
    </Wrapper>
  );
}
