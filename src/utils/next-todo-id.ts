import { TodoType } from "../types/todo-response-types";

export const nextTodoId = (todos: TodoType[]) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};
