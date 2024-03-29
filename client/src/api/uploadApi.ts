import axios, { AxiosResponse } from "axios";
import { ApplicantFormData } from "../components/Upload/ApplicantUploadForm";

// FIXME: 파일 업로더 -> createAsyncThunk?
/**
 * 로그아웃 시 실행 될 함수
 * @param {FormData} fileData 서버로 올리는 pdf 파일
 * @returns {boolean} 성공 여부?
 */

export const onUploadFile = async (data: FormData) => {
  console.log(data);
  try {
    // FIXME: URL 엔드포인트 확인하기
    const res = await axios.post("/applicant/register/", data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    });
    return res.data;
    // TODO: 파일 통신 성공하고 나면 후속 처리 ?
  } catch (error) {
    console.log(error);
  }
};
