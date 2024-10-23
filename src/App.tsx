import { useEffect } from "react";
import { useLoginMutation } from "./redux/features/api.slice";

function App() {
  const [login, obj] = useLoginMutation();
  const { isSuccess } = obj;

  useEffect(() => {
    if (isSuccess) {
      console.log("login successful obj:", obj);
    }
  }, [isSuccess, obj]);

  const handleLogin = () => {
    const reqBody = {
      username: "emilys",
      password: "emilyspass",
      expiresInMins: 1,
    };

    login(reqBody);
  };

  return (
    <div className="m-3 flex justify-center">
      <button
        className="rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        type="button"
        onClick={handleLogin}
      >
        Login
      </button>

      <button
        className="rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        type="button"
      >
        Button Red
      </button>

      <button
        className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        type="button"
      >
        Button Green
      </button>
    </div>
  );
}

export default App;
