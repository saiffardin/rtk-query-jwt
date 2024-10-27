import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { RefreshTokenRes } from "../../../../types/refresh-token-types";
import { setUserInfo } from "../../../features/user-info.slice";
import { lsSetToken } from "../../../../helper/local-storage";

export const setTokensToReduxAndLocalStorage = (params: {
  api: BaseQueryApi;
  tokens: RefreshTokenRes;
}) => {
  const { api, tokens } = params;

  const { accessToken, refreshToken } = tokens;

  api.dispatch(
    setUserInfo({
      accessToken: accessToken,
      refreshToken: refreshToken,
    }),
  );

  lsSetToken({
    access_token: accessToken,
    refresh_token: refreshToken,
  });
};
