import { localJsonServerApi } from ".";
import { TodoType } from "../../types/todo-response-types";
import { storeTodo } from "../features/todo.slice";
import { TAGS } from "./constants/tags";

const todoApi = localJsonServerApi.injectEndpoints({
  endpoints: (builder) => ({
    getTodoList: builder.query<TodoType[], unknown>({
      query: () => ({ url: "todo" }),

      providesTags: (result, error, arg) => {
        console.log("%cProvide Tags:", "color:red", { result, error, arg });

        return result
          ? [...result.map(({ id }) => ({ type: TAGS.TODO, id })), TAGS.TODO] // NOTE :: here is 2 tags, not 1
          : [TAGS.TODO]; // here is 1 tag
      },

      async onQueryStarted(_, api) {
        const { queryFulfilled } = api;
        try {
          const response = await queryFulfilled;
          api.dispatch(storeTodo(response.data));
        } catch (error) {
          console.log("===== onQueryStarted ERROR || getTodoList:", error);
          api.dispatch(storeTodo([]));
        }
      },
    }),

    addTodo: builder.mutation<TodoType, TodoType>({
      query: (reqBody) => ({
        url: "todo",
        method: "POST",
        body: reqBody,
      }),
      invalidatesTags: [TAGS.TODO],
    }),

    updateTodoStatus: builder.mutation<
      TodoType,
      { todoId: number; status: boolean }
    >({
      query: ({ todoId, status }) => ({
        url: `todo/${todoId}`,
        method: "PATCH",
        body: {
          completed: status,
        },
      }),

      invalidatesTags: (result, error, arg) => {
        console.log("%cInvalid Tags:", "color:red", { result, error, arg });
        return error ? [] : [{ type: TAGS.TODO, id: arg.todoId }];
      },
    }),
  }),
});

export const {
  useGetTodoListQuery,
  useAddTodoMutation,
  useUpdateTodoStatusMutation,
} = todoApi;
