import axios, { responseEncoding } from "axios";

/**
 * // TODO: type 설정하기
 * @param {option: string} - 검색 옵션 : 지원자 | 태그
 * @param {searchKeyword: string} - 검색어 입력값
 * @return {res.data : ApplicantDataType[]} - 지원자 배열 데이터
 */
export type SearchDataType = {
  option: string;
  searchKeyword: string;
};

export const fetchSearchResult = async ({
  option,
  searchKeyword,
}: SearchDataType) => {
  try {
    const res = await axios.get(`/search/${option}/${searchKeyword}/`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
