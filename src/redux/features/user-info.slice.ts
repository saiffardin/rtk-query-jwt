import { createSlice } from "@reduxjs/toolkit";
import { TypeRootState } from "../../types/redux";
import {
  UserInfoActionType,
  UserInfoStateType,
} from "../../types/redux/user-info-types";

const userInfoInitialState: UserInfoStateType = { data: {} };

const userInfoSlice = createSlice({
  name: "user-info-slice",
  initialState: userInfoInitialState,
  reducers: {
    setUserInfo(state: UserInfoStateType, actions: UserInfoActionType) {
      state.data = actions.payload;
    },

    clearUserInfo(state: UserInfoStateType) {
      state.data = {};
    },
  },
});

export const { reducer: userInfoReducer } = userInfoSlice;
export const { setUserInfo, clearUserInfo } = userInfoSlice.actions;
export const selectUserInfo = (state: TypeRootState) => state.userInfo.data;
