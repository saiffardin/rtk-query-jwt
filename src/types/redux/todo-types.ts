import { PayloadAction } from "@reduxjs/toolkit";
import { TodoType } from "../todo-response-types";

export interface TodoListStateType {
  data: TodoType[];
}

export type TodoActionType = PayloadAction<TodoType>;
export type TodoListActionType = PayloadAction<TodoType[]>;
