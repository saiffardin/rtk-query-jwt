import { useEffect } from "react";
import { useAppDispatch } from "../../redux";
import { useLoginMutation } from "../../redux/api/login.api";
import { lsGetToken, lsRemoveToken } from "../../helper/local-storage";
import {
  clearUserInfo,
  setUserInfo,
} from "../../redux/features/user-info.slice";
import BtnGreen from "./BtnGreen";
import BtnViolet from "./BtnViolet";

const ButtonView = () => {
  const dispatch = useAppDispatch();

  const [login, loginObj] = useLoginMutation();
  const { isSuccess } = loginObj;

  useEffect(() => {
    if (isSuccess) {
      console.log("login successful obj:", loginObj);
    }
  }, [isSuccess, loginObj]);

  useEffect(() => {
    const tokens = lsGetToken();

    dispatch(
      setUserInfo({
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = () => {
    const reqBody = {
      username: "emilys",
      password: "emilyspass",
      expiresInMins: 1,
    };

    login(reqBody);
  };

  const handleLogOut = () => {
    dispatch(clearUserInfo());
    lsRemoveToken();
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
        onClick={handleLogOut}
      >
        Log Out
      </button>

      <BtnGreen />
      <BtnViolet />
    </div>
  );
};

export default ButtonView;
