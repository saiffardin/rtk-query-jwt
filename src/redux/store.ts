import { configureStore } from "@reduxjs/toolkit";
import { dummyJsonApi } from "./features/api.slice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [dummyJsonApi.reducerPath]: dummyJsonApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dummyJsonApi.middleware),
});
