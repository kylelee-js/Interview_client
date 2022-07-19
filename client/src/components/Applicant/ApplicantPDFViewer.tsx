import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styled from "styled-components";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* FIXME: 너비 나중에 수정하기 */
  max-width: 700px;
  padding: 5px;
  background-color: grey;
`;

const PaginationMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const PageButton = styled.button`
  background-color: grey;
  padding: 5px;
  color: white;
  border-style: none;
  border-radius: 5px;
  cursor: pointer;
`;

type ApplicantPDFViewerPropsType = {
  filePath: string;
};

export default function ApplicantPDFViewer({
  filePath,
}: ApplicantPDFViewerPropsType) {
  // TODO: pdf 뷰어 설치하기
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);

  // FIXME: PDFPageProxy? 타입 확인해서 타입 교체하기
  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }
  return (
    <Wrapper onContextMenu={(e) => e.preventDefault()}>
      {/* TODO: 서버에서 불러온 PDF 파일 데이터 연결해서 렌더하기 */}
      <Document file={filePath} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <PaginationMenu>
        <PageButton
          onClick={() =>
            pageNumber > 1 ? setPageNumber(pageNumber - 1) : null
          }
        >
          이전 페이지 보기
        </PageButton>
        <span>
          Page {pageNumber} of {numPages}
        </span>

        <PageButton
          onClick={() =>
            pageNumber < numPages ? setPageNumber(pageNumber + 1) : null
          }
        >
          다음 페이지 보기
        </PageButton>
      </PaginationMenu>
    </Wrapper>
  );
}
