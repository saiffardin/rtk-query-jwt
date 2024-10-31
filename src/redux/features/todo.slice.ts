import { createSlice } from "@reduxjs/toolkit";
import { TypeRootState } from "../../types/redux";
import {
  TodoActionType,
  TodoListStateType,
} from "../../types/redux/todo-types";

const todoInitialState: TodoListStateType = { data: [] };

const todoSlice = createSlice({
  name: "user-info-slice",
  initialState: todoInitialState,
  reducers: {
    addTodo(state: TodoListStateType, actions: TodoActionType) {
      state.data = [...state.data, actions.payload];
    },

    // toggleTodo(state: TodoListStateType, actions: TodoActionType) {
    //   state.data = state.data.map(todo => {
    //     if(todo.id === actions.payload.id)
    //   })
    // }
  },
});

export const { reducer: todoReducer } = todoSlice;
export const { addTodo } = todoSlice.actions;
export const selectTodo = (state: TypeRootState) => state.todo.data;
