// Quill 에디터
import styled from "styled-components";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { ReactHTMLElement, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { onReview } from "./reviewSlice";

const Wrapper = styled.div`
  /* display: flex; */
  width: 100%;
  max-width: 700px;
  min-width: 300px;
  margin: 10px;
`;

export default function ReviewEditor() {
  const QuillRef = useRef<ReactQuill>();
  const [placeholder, setPlaceholder] = useState("공정한 리뷰를 작성해주세요.");
  const [review, setReview] = useState("");
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const onClick = () => {
    // FIXME: 이걸 왜 검사해야하는가?
    const text = "" + QuillRef.current?.getEditor().root.innerHTML;

    // console.log(text);
    if (text == "<p><br></p>") {
      setPlaceholder("리뷰를 작성하고 올려주세요");
      // TODO: 에러 팝업 띄우기
    } else {
      // FIXME: authSlice에서 사용자 정보 불러와서 입력해주기! + 리뷰 아이디 고유 아이디 입력하기
      dispatch(onReview({ id: user!.pk, name: user!.name, review: text }));
      setReview("");
    }
  };
  //   # dist
  // # dist-ssr
  // # *.local

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
        value={review}
        // defaultValue={review}
        placeholder={placeholder}
      />
      <button onClick={onClick}>작성</button>
    </Wrapper>
  );
}
