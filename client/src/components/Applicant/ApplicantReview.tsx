// Toast 에디터
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* display: flex; */
  width: 100%;
  max-width: 700px;
  min-width: 300px;
`;

export default function ApplicantReviewEditor() {
  // Toast-UI Editor DOM
  const editorRef = useRef();

  // Toast-UI Editor 에 HTML 표시
  // useEffect(() => {
  //   // 1. DB에서 가져온 HTML이라고 가정
  //   const htmlString = '<h1>h1 제목</h1> <p>p 내용</p>';

  //   // 2. Editor DOM 내용에 HTML 주입
  //   editorRef.current?.getInstance().setHTML(htmlString);
  // }, []);

  return (
    <Wrapper>
      <Editor
        // ref={editorRef}
        previewStyle="vertical"
        height="400px"
        initialEditType="wysiwyg"
        toolbarItems={[["bold", "italic", "strike"]]}
      ></Editor>
    </Wrapper>
  );
}
