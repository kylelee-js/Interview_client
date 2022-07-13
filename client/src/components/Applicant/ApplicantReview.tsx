// Quill 에디터
import styled from "styled-components";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

const Wrapper = styled.div`
  /* display: flex; */
  width: 100%;
  max-width: 700px;
  min-width: 300px;
`;

// TODO: 위에는 기존의 평가를 확인하는 뷰어를 제공해야함!
export default function ApplicantReviewEditor() {
  return (
    <Wrapper>
      {/* min-height는 글로벌 스타일에서 정의되어 있음! */}
      <ReactQuill />
    </Wrapper>
  );
}
