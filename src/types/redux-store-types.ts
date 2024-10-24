import { store } from "../redux/store";
import { type PayloadAction } from "@reduxjs/toolkit";
import { LoginRes } from "./login-types";

export type TypeAppDispatch = typeof store.dispatch;
export type TypeRootState = ReturnType<typeof store.getState>;

export interface UserInfoStateType {
  data: LoginRes;
}

export type UserInfoActionType = PayloadAction<LoginRes>;
