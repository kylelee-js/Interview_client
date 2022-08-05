import styled from "styled-components";

// PDFViewer Styles

export const PDFWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
`;

export const FilePageNavWrapper = styled.div`
  width: 90%;
  border: 0.1rem solid #cfd1d0;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #f2f7fa;
  padding: 10px 20px;
  margin-bottom: 20px;
`;

export const FilePageContainer = styled.span`
  margin-top: 5px;
  padding: 5px;
`;

export const FilePageButton = styled.button`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: 12px;
  font-weight: 500;
  justify-content: center;
  line-height: 1;
  margin-top: 5;
  min-height: 0.5rem;
  padding: 5px 10px;
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:hover {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(-1px);
  }
`;

export const PDFViewerWrapper = styled.div`
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100%;
  max-width: 700px;
  padding: 15px;
  margin-left: 50px;
  margin-bottom: 100px;
  background-color: #c4c3c2;
`;

export const StickyDivIntersectingTop = styled.div`
  height: 1px;
  visibility: hidden;
`;

export const StickyDivIntersectingBottom = styled.div`
  height: 1px;
  visibility: hidden;
`;
export const DocStickyDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;
  transition: top ease-in 0.5s;
  /* TODO: media-query: 사용자 vh에 따라 유동적으로 top 높이 변경 - ex: clac() */
  /* top: 50px; */
  &.stuck {
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const PaginationMenu = styled.div`
  position: relative;
  top: 0px;
  margin-top: 0.5rem;
  background-color: whitesmoke;
  width: 90%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 10px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  gap: 30px;
  transition: all ease-in 0.3s;
  &.stuck {
    &:hover {
      top: -40px;
    }
  }
  &.shown {
    &:hover {
      top: 0px;
    }
  }
`;

// InterviewerNav Styles

export const InterviewerNavWrapper = styled.div`
  width: 90%;
  border: 0.1rem solid #cfd1d0;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #f2f7fa;
  padding: 10px 20px;
  margin-bottom: 20px;
`;

export const InterviewerContainer = styled.span`
  margin-top: 5px;
  padding: 5px;
`;

export const InterviewerButton = styled.button`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: 12px;
  font-weight: 500;
  justify-content: center;
  line-height: 1;
  margin-top: 5;
  min-height: 0.5rem;
  padding: 5px 10px;
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  &:hover {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(-1px);
  }
`;
