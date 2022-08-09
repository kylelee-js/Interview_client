import axios, { AxiosResponse } from "axios";
import { ApplicantCoordinateType } from "../components/KanBanBoard/Kanban";

export const onFetchAllApplicants = async () => {
  try {
    const res = await axios.get("/board/myapplicants/");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

/**
 * 지원자를 아이디로 불러올 api
 * @param {number} id 지원자를 가져올 알려줄 아이디
 * @returns {boolean} 성공 여부?
 */
export const onFetchApplicantById = async (id: string) => {
  try {
    const res = await axios.get(`/applicant/${id}/`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
/**
 * 지원자 카드 드래그 드랍으로 위치 변화시에 요청하는 api
 * @param {ApplicantCoordinateType} applicantCoordinate 지원자의 보드와 인덱스 정보
 */
export const onPatchApplicantById = async (
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

/**
 * 지원자 면접일 지정시 요청하는 api
 * @param {number} id 지원자의 pk
 * @param {number} date 지원자의 면접일 Date의 ISO 포멧 문자열
 */

export const onUpdateApplicanDatetById = async (id: number, date: string) => {
  try {
    await axios.patch(`/applicant/update/${id}/`, {
      interviewDate: date,
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * 지원자 탈락 및 이동잠금 지정시 요청하는 api
 * @param {number} id 지원자의 pk
 * @param {boolean} isFixed 지원자의 이동잠금 실행 여부
 *  @param {boolean} isFailed 지원자의 탈락처리 실행 여부
 */
export const onUpdateApplicantFixAndFailById = async (
  id: number,
  isFixed: boolean,
  isFailed: boolean
) => {
  try {
    await axios.patch(`/applicant/update/${id}/`, {
      isFixed: isFixed,
      isFailed: isFailed,
    });
  } catch (error) {
    console.log(error);
  }
};

export const onDeleteApplicantById = async (id: string) => {
  try {
    const res = await axios.delete(`/applicant/${id}/`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

/**
 * 해당 지원자 면접관 등록 체크박스 클릭시 요청할 api
 * @param {string} id 지원자 pk
 * @param {boolean} isMine 등록 여부
 */
export const onSetApplicantMine = async (id: string, isMine: boolean) => {
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
