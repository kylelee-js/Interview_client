import axios, { AxiosResponse } from "axios";

export const onBoardUpdate = async (board: string) => {
  console.log(board);
  try {
    // FIXME: URL 엔드포인트 확인하기
    const res = await axios.put(
      "/applicant/update/",
      { board },
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
