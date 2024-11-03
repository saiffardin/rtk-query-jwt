import { ChangeEvent, FormEvent, useState } from "react";
import tickImage from "../../assets/images/double-tick.png";
import noteImage from "../../assets/images/notes.png";
import plusImage from "../../assets/images/plus.png";
import { useAddTodoMutation } from "../../redux/api/todo.api";
import { useAppSelector } from "../../redux";
import { selectTodo } from "../../redux/features/todo.slice";
import { nextTodoId } from "../../utils/next-todo-id";
import { TodoType } from "../../types/todo-response-types";

type ChangeEventType = ChangeEvent<HTMLInputElement>;

const InputTodo = () => {
  const [input, setInput] = useState("");
  const todoRedux = useAppSelector(selectTodo);
  const [addTodo] = useAddTodoMutation();

  const handleInput = (e: ChangeEventType) => {
    setInput(e.target.value);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const value = input.trim();

    if (value) {
      const reqBody: TodoType = {
        id: nextTodoId(todoRedux),
        completed: false,
        text: value,
      };

      addTodo(reqBody);
      setInput("");
    }
  };

  const completeHandler = () => {
    // dispatch(allCompleted());
    console.log("completeHandler");
  };

  const clearHandler = () => {
    // dispatch(clearCompleted());
    console.log("clearHandler");
  };

  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={submitHandler}
      >
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={handleInput}
        />
        <button type="submit" className={`w-8 h-8`}>
          <img src={plusImage} alt="plus" />
        </button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" onClick={completeHandler}>
          <img className="w-4 h-4" src={tickImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearHandler}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default InputTodo;
