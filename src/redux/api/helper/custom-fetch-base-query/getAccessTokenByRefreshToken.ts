/* eslint-disable @typescript-eslint/no-empty-object-type */

import { BaseQueryApi } from "@reduxjs/toolkit/query";
import {
  RefreshToken,
  RefreshTokenRTKQueryRes,
} from "../../../../types/refresh-token-types";
import { lsGetToken } from "../../../../helper/local-storage";
import { BaseQueryType } from "../types";

export const getAccessTokenByRefreshToken = async (
  baseQuery: BaseQueryType,
  api: BaseQueryApi,
  extraOptions: {},
): Promise<RefreshTokenRTKQueryRes> => {
  const { refresh_token } = lsGetToken();

  const getRefreshTokenReqBody: RefreshToken = {
    refreshToken: refresh_token || "",
    expiresInMins: 1,
  };

  const refreshResult: RefreshTokenRTKQueryRes = (await baseQuery(
    {
      url: "/auth/refresh",
      method: "POST",
      body: getRefreshTokenReqBody,
    },
    api,
    extraOptions,
  )) as RefreshTokenRTKQueryRes;

  return refreshResult;
};
