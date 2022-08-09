import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { onUploadFile } from "../../api/uploadApi";
import {
  Form,
  FormWrapper,
  Input,
  Select,
  SubmitButton,
} from "../../styles/formStyle";

export type ApplicantFormData = {
  applicantName: string;
  birth: string;
  department: string;
  job: string;
  file: FileList;
};

export default function ApplicantUploadForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
  } = useForm<ApplicantFormData>();

  const onSubmit: SubmitHandler<ApplicantFormData> = async (data) => {
    // PDF 파일 확장자 검사
    for (let i = 0; i < data.file.length; i++) {
      if (data.file[i].type != "application/pdf") {
        setError("file", {
          type: "filetype",
          message: "PDF 파일만 제출 가능합니다.",
        });
        return;
      } else if (data.file[i].name.length > 80) {
        setError("file", {
          type: "filetype",
          message: "파일 이름 제한은 최대 80자 입니다.",
        });
        return;
      }
    }
    const fileData = new FormData();
    fileData.append("applicantName", data.applicantName);
    fileData.append("birth", data.birth);
    fileData.append("department", data.department);
    fileData.append("job", data.job);
    for (let i = 0; i < data.file.length; i++) {
      fileData.append("file", data.file[i]);
    }

    console.log(fileData);
    const res = await onUploadFile(fileData);
    if (res) {
      navigate("/pool");
    } else {
      setError("file", {
        type: "validate",
        message:
          "업로드 과정에서 문제가 발생했습니다. 새로고침하거나 다시 시도해주세요",
      });
      return;
    }
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
              value:
                /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))$/i,
              message: "YYMMDD 양식이 아닙니다.",
            },
          })}
        />
        {errors.birth && (
          <div style={{ color: "red" }}> {errors.birth?.message}</div>
        )}

        <Select
          {...register("department", { required: "필수 입력 칸입니다." })}
        >
          <option style={{ display: "none" }} value="" disabled selected>
            직군을 선택해주세요.
          </option>
          <option value="개발">개발</option>
          <option value="경영지원">경영지원</option>
          <option value="마케팅">마케팅</option>
          <option value="디자인">디자인</option>
        </Select>
        {errors.department && (
          <div style={{ color: "red" }}> {errors.department?.message}</div>
        )}
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

        <input
          {...register("file", {
            required: "필수 입력 칸입니다.",
          })}
          type="file"
          id="applicantFile"
          accept="pdf/*"
          multiple
        />
        {errors.file && (
          <div style={{ color: "red" }}> {errors.file?.message}</div>
        )}
        <SubmitButton type="submit" value={"지원자 등록"} />
      </Form>
    </FormWrapper>
  );
}
