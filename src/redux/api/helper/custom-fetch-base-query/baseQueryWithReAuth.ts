import { Mutex } from "async-mutex";
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

// create a new mutex
const mutex = new Mutex();

export const baseQueryWithReAuth: BaseQueryWithReAuthType = async (
  args,
  api,
  extraOptions,
) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();

  const mainApiResult = await baseQuery(args, api, extraOptions);

  if (mainApiResult.error && mainApiResult.error.status === 401) {
    // checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        console.log("%cUnauthorized 401", "color:red", mainApiResult);

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
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    }
    // wait until the mutex is available without locking it
    else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      const lastFailedApiResult = await baseQuery(args, api, extraOptions);
      return lastFailedApiResult;
    }
  }

  return mainApiResult;
};
