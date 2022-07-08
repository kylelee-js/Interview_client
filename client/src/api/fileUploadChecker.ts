import axios, { AxiosResponse } from "axios";

// FIXME: 파일 업로더 -> createAsyncThunk?
/**
 * 로그아웃 시 실행 될 함수
 * @param {FormData} fileData 서버로 올리는 pdf 파일
 * @returns {boolean} 성공 여부?
 */

export const onFileUpload = async (data: FormData) => {
  try {
    // FIXME: URL 엔드포인트 확인하기
    const res = await axios.post("/fileupload", data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    });
    // TODO: 파일 통신 성공하고 나면 후속 처리 ?
  } catch (error) {
    console.log(error);
  }
};
