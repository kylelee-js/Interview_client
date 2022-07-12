import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ApplicantPDFViewer() {
  // TODO: pdf 뷰어 설치하기
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);

  // FIXME: PDFPageProxy? 타입 확인해서 타입 교체하기
  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }
  return (
    <div>
      {/* TODO: 서버에서 불러온 PDF 파일 데이터 연결해서 렌더하기 */}
      <Document file="sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        //이전 페이지 보기
        <span
          onClick={() =>
            pageNumber > 1 ? setPageNumber(pageNumber - 1) : null
          }
        >
          &lt;
        </span>
        <span>
          Page {pageNumber} of {numPages}
        </span>
        //다음 페이지 보기
        <span
          onClick={() =>
            pageNumber < numPages ? setPageNumber(pageNumber + 1) : null
          }
        >
          &gt;
        </span>
      </p>
    </div>
  );
}
