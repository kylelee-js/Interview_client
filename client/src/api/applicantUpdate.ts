import axios, { AxiosResponse } from "axios";

export const onApplicantUpdate = async (id: number, status: string) => {
  console.log(status);
  try {
    // FIXME: URL 엔드포인트 확인하기
    const res = await axios.patch(
      `/applicant/update/${id}/`,
      { status: +status },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    // TODO: 파일 통신 성공하고 나면 후속 처리 ?
  } catch (error) {
    console.log(error);
  }
};

export const setApplicantMine = async (id: string, isMine: boolean) => {
  try {
    // FIXME: URL 엔드포인트 확인하기
    const res = await axios.post(
      `/applicant/setmine/${id}/`,
      { isMine: isMine },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    // TODO: 파일 통신 성공하고 나면 후속 처리 ?
  } catch (error) {
    console.log(error);
  }
};
