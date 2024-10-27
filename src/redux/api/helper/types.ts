/* eslint-disable @typescript-eslint/no-empty-object-type */
import {
  BaseQueryApi,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query";

export type BaseQueryType = BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  {},
  FetchBaseQueryMeta
>;

export type BaseQueryWithReAuthType = BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
>;

export type SetHeadersType = (
  headers: Headers,
  api: ApiType,
) => MaybePromise<Headers | void>;

type ApiType = Pick<
  BaseQueryApi,
  "getState" | "extra" | "endpoint" | "type" | "forced"
>;

type MaybePromise<T> = T | PromiseLike<T>;
