import { createSlice } from "@reduxjs/toolkit";
import {
  TypeRootState,
  UserInfoActionType,
  UserInfoStateType,
} from "../../types/redux-store-types";

const userInfoInitialState: UserInfoStateType = { data: {} };

const userInfoSlice = createSlice({
  name: "user-info-slice",
  initialState: userInfoInitialState,
  reducers: {
    setUserInfo(state: UserInfoStateType, actions: UserInfoActionType) {
      state.data = actions.payload;
    },
  },
});

export const { reducer: userInfoReducer } = userInfoSlice;
export const { setUserInfo } = userInfoSlice.actions;
export const selectUserInfo = (state: TypeRootState) => state.userInfo.data;
