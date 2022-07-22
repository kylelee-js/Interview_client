import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

  /* TODO: 글로벌 스타일 설정하기 */
  .ql-editor{
    min-height:200px;
    font-size: 16px;
    /* box-sizing: border-box; */
  }

  .annotationLayer{
    display: none;
  }

`;

export default GlobalStyle;
