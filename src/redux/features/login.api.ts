import { Login, LoginRes } from "../../types/login-types";
import { dummyJsonApi } from "./auth.api";
import { setUserInfo } from "./user-info.slice";

const loginApi = dummyJsonApi.injectEndpoints({
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

export const { useLoginMutation } = loginApi;
