import styled from "styled-components";

export const BoardGrid = styled.div<{ boardLength: number }>`
  padding: 5px 15px;
  display: grid;
  grid-template-columns: repeat(${(props) => props.boardLength}, 1fr);
  gap: 50px;
  box-sizing: border-box;
  min-height: 80vh;
  width: 100%;
  background-color: #d9dedb;
  border-radius: 3px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const BoardDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  /* 드랍 보드 여유 바닥 */
  padding-bottom: 150px;
`;

// MUI Box Custom Style
export const boxStyle = {
  margin: "5px",
  marginBottom: "20px",
  borderRadius: "5px",
  maxWidth: 340,
  backgroundColor: "#f2f7fa",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  display: "flex",
  alignItems: "center",
  // justifyContent: "center",

  padding: "10px 5px",
  paddingLeft: "20px",
};

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TagNote = styled.span`
  cursor: pointer;
  /* word-wrap: normal; */
  margin-top: 5px;
  display: inline-block;
  white-space: normal;
  word-break: keep-all;
  font-size: 12px;
  padding: 3px 5px;
  margin-right: 10px;
  background-color: grey;
  color: white;
  border-radius: 5px;
`;

export const MenuButtonDiv = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
`;

export const CheckBoxDiv = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
`;
