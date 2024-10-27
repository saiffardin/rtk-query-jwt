import { setHeaders } from "../set-headers";
import { BaseQueryWithReAuthType } from "../types";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { lsRemoveToken } from "../../../../helper/local-storage";
import { clearUserInfo } from "../../../features/user-info.slice";
import { getAccessTokenByRefreshToken } from "./getAccessTokenByRefreshToken";
import { setTokensToReduxAndLocalStorage } from "./setTokensToReduxAndLocalStorage";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://dummyjson.com",
  prepareHeaders: setHeaders,
});

export const baseQueryWithReAuth: BaseQueryWithReAuthType = async (
  args,
  api,
  extraOptions,
) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    console.log("%cUnauthorized 401", "color:red", result);

    const refreshResult = await getAccessTokenByRefreshToken(
      baseQuery,
      api,
      extraOptions,
    );

    if (refreshResult.data) {
      setTokensToReduxAndLocalStorage({ api, tokens: refreshResult.data });

      const lastFailedApiResult = await baseQuery(args, api, extraOptions);
      return lastFailedApiResult;
    } else {
      // call log-out api
      api.dispatch(clearUserInfo());
      lsRemoveToken();
    }
  }

  return result;
};
