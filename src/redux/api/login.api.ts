import { lsSetToken } from "../../helper/local-storage";
import { Login, LoginRes } from "../../types/login-types";
import { dummyJsonApi } from "../api/auth.api";
import { setUserInfo } from "../features/user-info.slice";

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
          lsSetToken({
            access_token: data.accessToken,
            refresh_token: data.refreshToken,
          });
        } catch (err) {
          console.log(err);
          // ask -> should i clear redux-state and local-storage when error occurs ?
        }
      },
    }),
  }),
});

export const { useLoginMutation } = loginApi;
