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
  let isLogin = useAppSelector((state) => state.auth.user?.isLogin);
  console.log(isLogin);
  const token = useAppSelector((state) => state.auth.token);
  console.log(token);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
  } = useForm<ApplicantFormData>();

  const onSubmit: SubmitHandler<ApplicantFormData> = (data) => {
    console.log(data);
    // PDF 파일 확장자 regex 검사기
    if (data.file[0].type != "application/pdf") {
      setError("file", {
        type: "filetype",
        message: "PDF 파일만 제출 가능합니다.",
      });
      return;
    }
    const fileData = new FormData();
    fileData.append("name", data.name);
    fileData.append("birth", data.birth);
    fileData.append("department", data.department);
    fileData.append("job", data.job);
    fileData.append("file", data.file[0]);
    onFileUpload(fileData);
  };
  console.log(errors);

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

        {/* TODO: file upload */}
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
        {errors.file && (
          <div style={{ color: "red" }}> {errors.file?.message}</div>
        )}
        <SubmitButton type="submit" value={"지원자 등록"} />
      </Form>
    </FormWrapper>
  );
}
