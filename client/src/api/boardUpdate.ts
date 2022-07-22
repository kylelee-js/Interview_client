import axios, { AxiosResponse } from "axios";
import { ApplicantBoardType } from "../components/KanBanBoard/kanbanSlice";

export const onBoardUpdate = async (board: ApplicantBoardType[]) => {
  try {
    // FIXME: URL 엔드포인트 확인하기
    const res = await axios.put(
      "/board/update/",
      { board: board },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    // TODO: 파일 통신 성공하고 나면 후속 처리 ?
  } catch (error) {
    // TODO: 잠깐 에러 로그 꺼두기 - useEffect 수정
    // console.log(error);
  }
};
