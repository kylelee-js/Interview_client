import axios, { AxiosResponse } from "axios";

/**
 * 지원자 상태 변화 추적용 polling api
 */
export const onNoticeUser = async () => {
  try {
    const res = await axios.get("/user/notice/");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

/**
 * 지원자 카드 태그 작성시 요청하는 api
 * @param {string} tagText 태그 작성 내용
 * @param {number} applicantId 해당 지원자 pk
 */
export const onPostTag = async (tagText: string, applicantId: number) => {
  try {
    const res = await axios.post("/tag/", {
      tagText: tagText,
      pk: applicantId,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

/**
 * 지원자 카드 태그 삭제시 요청하는 api
 * @param {number} tagId 삭제할 태그 아이디
 * @param {number} applicantId 해당 지원자 pk
 */
export const onDeleteTag = async (tagPk: number, applicantId: number) => {
  try {
    const res = await axios.delete(`/tag/${applicantId}/${tagPk}/`);
  } catch (error) {
    console.log(error);
  }
};
