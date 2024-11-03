import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <InputTodo />

        <hr className="mt-4" />

        <TodoList />
      </div>
    </div>
  );
};

export default TodoApp;
