import axios, { AxiosResponse } from "axios";
import { ApplicantCoordinateType } from "../components/KanBanBoard/Kanban";

/**
 * 지원자 불러올 시 실행 될 함수
 * @param {id : number} - 지원자를 가져올 알려줄 아이디
 * @returns {boolean} 성공 여부?
 */

export const fetchApplicants = async () => {
  try {
    const res = await axios.get("/board/myapplicants/");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchApplicantById = async (id: string) => {
  try {
    const res = await axios.get(`/applicant/${id}/`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const patchApplicantById = async (
  applicantCoordinate: ApplicantCoordinateType
) => {
  const { id, status, index, boardPk, prevBoardPk } = applicantCoordinate;
  try {
    // TODO: /update/ 나중에 서버 올라오면 제거하기
    const res = await axios.patch(`/applicant/${id}/`, {
      status: status,
      index: index,
      prevBoardPk: prevBoardPk,
      boardPk: boardPk,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const patchApplicanDatetById = async (id: number, date: string) => {
  try {
    await axios.patch(`/applicant/date/${id}/`, {
      interviewDate: date,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteApplicantById = async (id: string) => {
  try {
    const res = await axios.delete(`/applicant/${id}/`);
    return res.data;
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
