import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dummyJsonApi = createApi({
  reducerPath: "auth-api-dummy-json",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/auth" }),
  endpoints: () => ({}),
});
