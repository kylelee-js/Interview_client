import { ErrorMessage } from "@hookform/error-message";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
  applicantName: string;
  birth: string;
  department: string;
  job: string;
  filePath: FileList;
  // TODO: default = 미등록
  // state: string;
};
export default function ApplicantUploadForm() {
  let isLogin = useAppSelector((state) => state.auth.user?.isLogin);
  console.log(isLogin);
  const token = useAppSelector((state) => state.auth.access);
  console.log(token);
  const navigate = useNavigate();
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
    if (data.filePath[0].type != "application/pdf") {
      setError("filePath", {
        type: "filetype",
        message: "PDF 파일만 제출 가능합니다.",
      });
      return;
    }
    const fileData = new FormData();
    fileData.append("applicantName", data.applicantName);
    fileData.append("birth", data.birth);
    fileData.append("department", data.department);
    fileData.append("job", data.job);
    fileData.append("filePath", data.filePath[0]);
    onFileUpload(fileData);
    navigate("/");
  };
  console.log(errors);

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="지원자 이름을 입력해주세요"
          {...register("applicantName", {
            required: "필수 입력 칸입니다.",
            maxLength: 100,
          })}
        />
        {errors.applicantName && (
          <div style={{ color: "red" }}> {errors.applicantName?.message}</div>
        )}
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
        {errors.birth && (
          <div style={{ color: "red" }}> {errors.birth?.message}</div>
        )}

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
        {errors.job && (
          <div style={{ color: "red" }}> {errors.job?.message}</div>
        )}

        {/* TODO: file upload */}
        <input
          // ref={fileUploader}
          {...register("filePath", {
            required: "필수 입력 칸입니다.",
          })}
          type="file"
          id="applicantFile"
          accept="pdf/*"
          // onChange={onUploadFile}
        />
        {errors.filePath && (
          <div style={{ color: "red" }}> {errors.filePath?.message}</div>
        )}
        <SubmitButton type="submit" value={"지원자 등록"} />
      </Form>
    </FormWrapper>
  );
}
