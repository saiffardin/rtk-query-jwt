import { useState } from "react";
import { useGetCurrentUserQuery } from "../../redux/api/current-user.api";
import { useGetProductsQuery } from "../../redux/api/get-products.api";

const BtnViolet = () => {
  const [fetchData, setFetchData] = useState(false);

  const currentUseQuery = useGetCurrentUserQuery(undefined, {
    skip: !fetchData,
  });

  const getProductsQuery = useGetProductsQuery(undefined, {
    skip: !fetchData,
  });

  const { isError } = getProductsQuery;
  const { isError: isError1 } = currentUseQuery;

  console.log("%cGetProductsQuery:", "color:violet", {
    getProductsQuery,
    currentUseQuery,
  });

  const handleGetProducts = () => {
    // call get-curr-user here
    setFetchData(true);
  };

  return (
    <>
      <button
        className={`rounded-md bg-violet-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-violet-700 focus:shadow-none active:bg-violet-700 hover:bg-violet-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2`}
        type="button"
        onClick={handleGetProducts}
      >
        Multiple api call
      </button>

      {isError ? (
        <h1 className="text-center text-3xl text-violet-500 mx-4">Error !!!</h1>
      ) : null}

      {isError1 ? (
        <h1 className="text-center text-3xl text-red-500 mx-4">Error-1 !!!</h1>
      ) : null}
    </>
  );
};

export default BtnViolet;
