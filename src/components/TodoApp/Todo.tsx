import cancelImage from "../../assets/images/cancel.png";
import { useUpdateTodoStatusMutation } from "../../redux/api/todo.api";
import { TodoType } from "../../types/todo-response-types";

interface Props {
  todo: TodoType;
}

const Todo = ({ todo }: Props) => {
  const { id, text, completed } = todo;

  const [updateTodo] = useUpdateTodoStatusMutation();

  const handleStatusChange = () => {
    updateTodo({ todoId: todo.id, status: !todo.completed });
  };

  const handleDelete = (todoId: number) => {
    // dispatch(deleted(todoId));
    console.log("handleDelete:", { todoId, todo });
  };
  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div
        className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
          completed && "border-green-500 focus-within:border-green-500"
        }`}
      >
        <input
          type="checkbox"
          checked={completed}
          onChange={handleStatusChange}
          className="opacity-0 absolute rounded-full"
        />
        {completed && (
          <svg
            className="fill-current w-3 h-3 text-green-500 pointer-events-none"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        )}
      </div>

      <div className={`select-none flex-1 ${completed && "line-through"}`}>
        {text}
      </div>

      <img
        src={cancelImage}
        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
        alt="Cancel"
        onClick={() => handleDelete(id)}
      />
    </div>
  );
};

export default Todo;
