import { PayloadAction } from "@reduxjs/toolkit";

export interface TodoType {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoListStateType {
  data: TodoType[];
}

export type TodoActionType = PayloadAction<TodoType>;
// export type TodoListActionType = PayloadAction<TodoType[]>;
