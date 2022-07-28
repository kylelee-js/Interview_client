import { Button, Typography } from "@mui/material";
import { truncate } from "fs";
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styled from "styled-components";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Wrapper = styled.div`
  position: relative;

  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100%;
  /* FIXME: 너비 나중에 수정하기 */
  max-width: 700px;
  padding: 15px;
  margin-left: 50px;
  margin-bottom: 100px;
  background-color: #c4c3c2;
`;

const StickyDivIntersectingTop = styled.div`
  height: 1px;
  visibility: hidden;
`;
const StickyDivIntersectingBottom = styled.div`
  height: 1px;
  visibility: hidden;
`;
const DocStickyDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: sticky;

  /* TODO: 사용자 디바이스 높이에 따라 50px과 rem 중에서 선택 */
  /* top: 0.5rem; */
  top: 50px;
`;

const PaginationMenu = styled.div`
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

type ApplicantPDFViewerPropsType = {
  filePath: string;
};

export default function ApplicantPDFViewer({
  filePath,
}: ApplicantPDFViewerPropsType) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const stickyDivTop = useRef<HTMLDivElement>(null);
  const stickyDivBottom = useRef<HTMLDivElement>(null);
  const pagDiv = useRef<HTMLDivElement>(null);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.intersectionRatio == 0) {
          pagDiv.current?.classList.add("stuck");
        } else if (e.intersectionRatio == 1) {
          pagDiv.current?.classList.remove("stuck");
        }
      },
      { threshold: [1] }
    );
    observer.observe(stickyDivTop.current!);

    const bottomObserver = new IntersectionObserver(
      ([e]) => {
        if (e.intersectionRatio == 0) {
          pagDiv.current?.classList.remove("shown");
        } else if (e.intersectionRatio == 1) {
          pagDiv.current?.classList.add("shown");
        }
      },
      { threshold: [1] }
    );
    bottomObserver.observe(stickyDivBottom.current!);

    return () => {
      observer.disconnect();
      bottomObserver.disconnect();
    };
  }, []);
  return (
    <Wrapper onContextMenu={(e) => e.preventDefault()}>
      <StickyDivIntersectingTop ref={stickyDivTop} />
      <DocStickyDiv id="stickyDoc">
        <Document
          file={{
            url: filePath,
          }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <PaginationMenu ref={pagDiv}>
          <Button
            style={{ backgroundColor: "#21b6ae" }}
            variant="contained"
            onClick={() =>
              pageNumber > 1 ? setPageNumber(pageNumber - 1) : null
            }
          >
            이전 페이지 보기
          </Button>
          <Typography>
            Page {pageNumber} of {numPages}
          </Typography>
          <Button
            style={{ backgroundColor: "#21b6ae" }}
            variant="contained"
            onClick={() =>
              pageNumber < numPages ? setPageNumber(pageNumber + 1) : null
            }
          >
            다음 페이지 보기
          </Button>
        </PaginationMenu>
        <StickyDivIntersectingBottom ref={stickyDivBottom} />
      </DocStickyDiv>
    </Wrapper>
  );
}
