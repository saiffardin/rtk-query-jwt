import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Login, LoginRes } from "../../types/login-types";

export const dummyJsonApi = createApi({
  reducerPath: "auth/me",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/auth" }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginRes, Login>({
      query: (reqBody) => ({
        url: `login`,
        method: "POST",
        body: reqBody,
      }),
    }),
  }),
});

export const { useLoginMutation } = dummyJsonApi;
