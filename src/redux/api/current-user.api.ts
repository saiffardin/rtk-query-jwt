import { ProductRes } from "../../types/product-types";
import { dummyJsonApi } from ".";
import { ENDPOINTS } from "./constants/endpoints";

const { GET_CURRENT_USER } = ENDPOINTS;

const currentUserApi = dummyJsonApi.injectEndpoints({
  endpoints: (builder) => ({
    [GET_CURRENT_USER.KEY]: builder.query<ProductRes, unknown>({
      query: () => ({ url: GET_CURRENT_USER.URL }),

      async onQueryStarted(_, api) {
        const { queryFulfilled } = api;
        try {
          const data = await queryFulfilled;
          console.log("===== onQueryStarted || currentUserApi:", data);
        } catch (error) {
          console.log("===== onQueryStarted ERROR || currentUserApi:", error);
        }
      },
    }),
  }),
});

export const { useGetCurrentUserQuery } = currentUserApi;
