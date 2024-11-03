import Todo from "./Todo";
import { useGetTodoListQuery } from "../../redux/api/todo.api";

const TodoList = () => {
  const { data: todos, isSuccess } = useGetTodoListQuery({});

  if (isSuccess) {
    console.log("useGetTodoListQuery -- success");
  }

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos?.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
