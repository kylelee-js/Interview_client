import styled from "styled-components";

export const ConfirmWrapper = styled.div<{ isShown: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.isShown ? "visible" : "hidden")};
  opacity: ${(props) => (props.isShown ? 1 : 0)};
  transition: ${(props) =>
    props.isShown
      ? "visibility 0s linear 0s, opacity 250ms"
      : "visibility 0s linear 250ms, opacity 250ms"};
  /* transition: opacity ease 0.25s; */
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
`;

export const Confirm = styled.div`
  position: relative;
  z-index: 10;
  max-width: 500px;
  min-width: 300px;
  min-height: 100px;
  width: 33%;
  padding: 20px;
  border-radius: 5px;
  background: #fff;
  transform: translateY(80px);
  transition: transform ease 0.3s 0.1s;
`;
