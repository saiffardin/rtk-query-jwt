import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReAuth } from "./helper/custom-fetch-base-query/baseQueryWithReAuth";

export const dummyJsonApi = createApi({
  reducerPath: "auth-api-dummy-json",
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
});
