import React, { useRef, useState } from "react";
import styled from "styled-components";

const UploadInputHidden = styled.input`
  display: none;
`;
const UploadButton = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #f03d4e;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export default function Uploader() {
  const fileUploader = useRef<HTMLInputElement>(null);
  const onUploadClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (fileUploader.current) {
      fileUploader.current.click();
    }
  };
  const onUploadFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileData = new FormData();
    if (event.target.files) {
      // FIXME: formData.append 시 키와 벨류로 저장을 해야하는데 벨류 타입이 스트링이다. -> 검색 좀 더 하기

      fileData.append("file", "" + event.target.files);
    }

    // TODO: 여기서 서버로 비동기 통신 = 파일 전송
  };
  return (
    <>
      {/* display : none을 주고 추가 버튼으로 위에 창 내려오게 디자인? */}
      <UploadInputHidden
        ref={fileUploader}
        type="file"
        name="file"
        id="applicantFile"
        accept="pdf/*"
        onChange={onUploadFile}
      />
      <UploadButton onClick={onUploadClick}></UploadButton>
    </>
  );
}
