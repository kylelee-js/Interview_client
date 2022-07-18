import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApplicantFormData } from "../components/Upload/ApplicantUploadForm";

// TODO: 리뷰 상태, 칸반 상태 등 - 서버와 통신할 end point들 연결하기
export const queryApi = createApi({
  reducerPath: "queryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/" }),
  endpoints: (builder) => ({
    getApplicantById: builder.query<ApplicantFormData, string>({
      query: (id) => `applicant/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetApplicantByIdQuery } = queryApi;
