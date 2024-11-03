import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReAuth } from "./helper/custom-fetch-base-query/baseQueryWithReAuth";
import { TAGS } from "./constants/tags";

export const dummyJsonApi = createApi({
  reducerPath: "auth-api-dummy-json",
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
});

export const localJsonServerApi = createApi({
  reducerPath: "local-json-server",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: [TAGS.TODO],
  endpoints: () => ({}),
});
