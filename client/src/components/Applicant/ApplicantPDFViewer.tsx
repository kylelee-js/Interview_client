import { Button, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  DocStickyDiv,
  PaginationMenu,
  PDFWrapper,
  StickyDivIntersectingBottom,
  StickyDivIntersectingTop,
} from "../../styles/reviewViewerStyle";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
    const topObserver = new IntersectionObserver(
      ([e]) => {
        if (e.intersectionRatio == 0) {
          pagDiv.current?.classList.add("stuck");
        } else if (e.intersectionRatio == 1) {
          pagDiv.current?.classList.remove("stuck");
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
    <PDFWrapper onContextMenu={(e) => e.preventDefault()}>
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
    </PDFWrapper>
  );
}
