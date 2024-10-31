import { LoginRes } from "../login-types";
import { PayloadAction } from "@reduxjs/toolkit";

export interface UserInfoStateType {
  data: LoginRes;
}

export type UserInfoActionType = PayloadAction<LoginRes>;
