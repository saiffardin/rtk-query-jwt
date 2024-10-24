import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Login, LoginRes } from "../../types/login-types";
import { setUserInfo } from "./user-info.slice";

export const dummyJsonApi = createApi({
  reducerPath: "auth-api-dummy-json",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/auth" }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginRes, Login>({
      query: (reqBody) => ({
        url: `login`,
        method: "POST",
        body: reqBody,
      }),

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data }: { data: LoginRes } = await queryFulfilled;
          dispatch(setUserInfo(data));
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useLoginMutation } = dummyJsonApi;
