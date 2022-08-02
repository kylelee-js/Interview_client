import axios from "axios";

/**
 * // TODO: type 설정하기
 * @param {applicantStatus : number} - 지원자 채용 상태
 * @param {applicantId : number} - 지원자 pk
 * @param {reviewText : text/html} - 리뷰 정보
 */
export type ReviewDataType = {
  applicantStatus: number;
  applicantId: number;
  reviewText: string;
};

export const reviewApi = {
  fetchReviewById: async (id: string) => {
    try {
      const res = await axios.get(`/review/${id}/`);
      console.log(res.data.reviewData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
  // TODO: reviewData typing 하기
  onWriteReview: async (reviewData: ReviewDataType) => {
    try {
      // FIXME: URL 엔드포인트 확인하기
      const res = await axios.post("/review/write/", { ...reviewData });
      return res.data;
      // TODO: 파일 통신 성공하고 나면 후속 처리 ?
    } catch (error) {
      console.log(error);
    }
  },
  onEditReview: async (id: string, reviewData: ReviewDataType) => {
    try {
      // FIXME: URL 엔드포인트 확인하기
      const res = await axios.patch(`/review/update/${id}/`, { ...reviewData });
      return res.data;
      // TODO: 파일 통신 성공하고 나면 후속 처리 ?
    } catch (error) {
      console.log(error);
    }
  },
  onDeleteReview: async (id: string) => {
    try {
      // FIXME: URL 엔드포인트 확인하기
      const res = await axios.delete(`/review/update/${id}/`);
      // TODO: 파일 통신 성공하고 나면 후속 처리 ?
    } catch (error) {
      console.log(error);
    }
  },
};
