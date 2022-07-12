import { ErrorMessage } from "@hookform/error-message";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { onFileUpload } from "../../api/applicantUploadChecker";
import { useAppSelector } from "../../store";
import {
  Form,
  FormWrapper,
  Input,
  SubmitButton,
  ValidationMessage,
} from "../../styles/formStyle";
import Uploader from "./Uploader";

export type ApplicantFormData = {
  name: string;
  birth: string;
  department: string;
  job: string;
  file: FileList;
  // TODO: default = 미등록
  // state: string;
};
export default function ApplicantUploadForm() {
  let isLogin = useAppSelector((state) => state.auth.authenticated);
  console.log(isLogin);
  const token = useAppSelector((state) => state.auth.token);
  console.log(token);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ApplicantFormData>();

  const onSubmit: SubmitHandler<ApplicantFormData> = (data) => {
    console.log(data);
    const fileData = new FormData();
    fileData.append("name", data.name);
    fileData.append("birth", data.birth);
    fileData.append("department", data.department);
    fileData.append("job", data.job);
    fileData.append("file", data.file[0]);
    onFileUpload(fileData);
  };
  console.log(errors);

  // const onUploadFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const fileData = new FormData();
  //   if (event.target.files) {
  //     // FIXME: formData.append 시 키와 벨류로 저장을 해야하는데 벨류 타입이 스트링이다. -> 검색 좀 더 하기
  //     fileData.append("file", event.target.files[0] );
  //     console.log(event.target.files[0]);
  //     console.log(fileData.has("file"));
  //   }

  //   // TODO: 여기서 서버로 비동기 통신 = 파일 전송
  //   // onFileUpload(fileData);
  // };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="지원자 이름을 입력해주세요"
          {...register("name", {
            required: "필수 입력 칸입니다.",
            maxLength: 100,
          })}
        />
        <Input
          type="text"
          placeholder="생년월일(YYMMDD)을 입력해주세요 - 6자리"
          {...register("birth", {
            required: "필수 입력 칸입니다.",
            maxLength: 100,
            pattern: {
              value: /^(?=.*\d).{6,6}$/i,
              message: "YYMMDD 양식이 아닙니다.",
            },
          })}
        />
        <select {...register("department", { required: true })}>
          <option value="개발">개발</option>
          <option value="경영지원">경영지원</option>
          <option value="마케팅">마케팅</option>
          <option value="디자인">디자인</option>
        </select>
        <Input
          type="text"
          placeholder="지원자 직무을 입력해주세요"
          {...register("job", {
            required: "필수 입력 칸입니다.",
            maxLength: 100,
          })}
        />

        {/* TODO: file uploade  r */}
        <input
          // ref={fileUploader}
          {...register("file", {
            required: "필수 입력 칸입니다.",
          })}
          type="file"
          id="applicantFile"
          accept="pdf/*"
          // onChange={onUploadFile}
        />
        <SubmitButton type="submit" value={"지원자 등록"} />
      </Form>
    </FormWrapper>
  );
}
