import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setHeaders } from "./helper/set-headers";

export const dummyJsonApi = createApi({
  reducerPath: "auth-api-dummy-json",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
    prepareHeaders: setHeaders,
  }),
  endpoints: () => ({}),
});
