import { useState } from "react";
import { useGetCurrentUserQuery } from "../redux/api/current-user.api";

const BtnGreen = () => {
  const [fetchData, setFetchData] = useState(false);

  const currentUseQuery = useGetCurrentUserQuery(undefined, {
    skip: !fetchData,
  });

  console.log("%cCurrentUseQuery:", "color:green", currentUseQuery);

  const handlerCurrentUser = () => {
    // call get-curr-user here
    setFetchData(true);
  };

  return (
    <button
      className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
      type="button"
      onClick={handlerCurrentUser}
    >
      Get Curr User
    </button>
  );
};

export default BtnGreen;
