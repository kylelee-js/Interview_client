import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* TODO: 글로벌 스타일 설정하기 */
  .ql-editor{
    min-height:200px;
    font-size: 16px;
}
`;

export default GlobalStyle;
