// import { fetchBaseQuery } from "@reduxjs/toolkit/query";
// import type {
//   BaseQueryFn,
//   FetchArgs,
//   FetchBaseQueryError,
// } from "@reduxjs/toolkit/query";
// // import { tokenReceived, loggedOut } from './authSlice'

// const baseQuery = fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" });

// const baseQueryWithReAuth: BaseQueryFn<
//   string | FetchArgs,
//   unknown,
//   FetchBaseQueryError
// > = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);
//   console.log(result);
//   // if (result.error && result.error.status === 401) {
//   if (result.data.id && result.data.id === 25) {
//     console.log("===============id:25");
//     // try to get a new token
//     const refreshResult = await baseQuery("/refreshToken", api, extraOptions);
//     if (refreshResult.data) {
//       // store the new token
//       // api.dispatch(tokenReceived(refreshResult.data));

//       // retry the initial query
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       // api.dispatch(loggedOut());
//     }
//   }
//   return result;
// };

// export default baseQueryWithReAuth;
