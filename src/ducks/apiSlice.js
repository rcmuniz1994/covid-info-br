import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://covid19-brazil-api.now.sh/api/report/v1",
  }),
  endpoints: (builder) => ({
    getCovidInfoBr: builder.query({
      query: () => "/brazil",
      transformResponse: (response) => response.data,
    }),
    getCovidInfoPerState: builder.query({
      query: () => "/",
      transformResponse: (response) => response.data
    }),
  }),
});

export const { useGetCovidInfoBrQuery, useGetCovidInfoPerStateQuery } =
  apiSlice;
