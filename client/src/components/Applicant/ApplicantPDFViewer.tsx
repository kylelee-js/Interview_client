import { Button, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  DocStickyDiv,
  FilePageButton,
  FilePageContainer,
  FilePageNavWrapper,
  PaginationMenu,
  PDFViewerWrapper,
  StickyDivIntersectingBottom,
  StickyDivIntersectingTop,
} from "../../styles/reviewViewerStyle";
import { fileDataType } from "./applicantSlice";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type ApplicantPDFViewerPropsType = {
  fileData: fileDataType[];
};

export default function ApplicantPDFViewer({
  fileData,
}: ApplicantPDFViewerPropsType) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [fileNumber, setFileNumber] = useState(0);
  const stickyDivTop = useRef<HTMLDivElement>(null);
  const stickyDivBottom = useRef<HTMLDivElement>(null);
  const pagDiv = useRef<HTMLDivElement>(null);
  const stickyDiv = useRef<HTMLDivElement>(null);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  useEffect(() => {
    const topObserver = new IntersectionObserver(
      ([e]) => {
        if (e.intersectionRatio == 0) {
          pagDiv.current?.classList.add("stuck");
          stickyDiv.current?.classList.add("stuck");
        } else if (e.intersectionRatio == 1) {
          pagDiv.current?.classList.remove("stuck");
          stickyDiv.current?.classList.remove("stuck");
        }
      },
      { threshold: [1] }
    );

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

    topObserver.observe(stickyDivTop.current!);
    bottomObserver.observe(stickyDivBottom.current!);

    return () => {
      topObserver.disconnect();
      bottomObserver.disconnect();
    };
  }, []);

  return (
    <PDFViewerWrapper onContextMenu={(e) => e.preventDefault()}>
      <FilePageNavWrapper>
        {fileData.map((file, index) => (
          <FilePageContainer key={file.id}>
            <FilePageButton
              onClick={() => {
                setFileNumber(index);
                setPageNumber(1);
              }}
            >
              {index + 1}
            </FilePageButton>
          </FilePageContainer>
        ))}
      </FilePageNavWrapper>
      <StickyDivIntersectingTop ref={stickyDivTop} />
      <DocStickyDiv ref={stickyDiv} id="stickyDoc">
        <div>
          <Document
            file={{
              // url: fileData[fileNumber].file,
              url:
                fileData[fileNumber].file.slice(0, 18) +
                ":8080" +
                fileData[fileNumber].file.slice(18),
              httpHeaders: {
                Authorization: axios.defaults.headers.common["Authorization"],
              },
              withCredentials: true,
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
        </div>
      </DocStickyDiv>
    </PDFViewerWrapper>
  );
}
