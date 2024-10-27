import {
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryReturnValue,
} from "@reduxjs/toolkit/query";

export interface RefreshToken {
  refreshToken: string;
  expiresInMins: number;
}

export interface RefreshTokenRes {
  accessToken?: string;
  refreshToken?: string;
}

export type RefreshTokenRTKQueryRes = QueryReturnValue<
  RefreshTokenRes,
  FetchBaseQueryError,
  FetchBaseQueryMeta
>;
