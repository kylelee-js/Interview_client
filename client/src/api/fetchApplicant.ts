import axios, { AxiosResponse } from "axios";

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
