import { createSlice } from "@reduxjs/toolkit";
import { TypeRootState } from "../../types/redux";
import {
  TodoActionType,
  TodoListActionType,
  TodoListStateType,
} from "../../types/redux/todo-types";

const todoInitialState: TodoListStateType = { data: [] };

const todoSlice = createSlice({
  name: "user-info-slice",
  initialState: todoInitialState,
  reducers: {
    storeTodo(state: TodoListStateType, actions: TodoListActionType) {
      state.data = actions.payload;
    },

    addTodo(state: TodoListStateType, actions: TodoActionType) {
      state.data = [...state.data, actions.payload];
    },

    //TOGGLED
    //COLORSELECTED
    //DELETED
    //ALLCOMPLETED
    //CLEARCOMPLETED
  },
});

export const { reducer: todoReducer } = todoSlice;

export const { storeTodo, addTodo } = todoSlice.actions;

export const selectTodo = (state: TypeRootState) => state.todo.data;
