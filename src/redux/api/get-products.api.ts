import { dummyJsonApi } from ".";
import { ProductRes } from "../../types/product-types";
import { ENDPOINTS } from "./constants/endpoints";

const { GET_PRODUCTS } = ENDPOINTS;

const getProductsApi = dummyJsonApi.injectEndpoints({
  endpoints: (builder) => ({
    [GET_PRODUCTS.KEY]: builder.query<ProductRes, unknown>({
      query: () => ({ url: GET_PRODUCTS.URL }),

      async onQueryStarted(_, api) {
        const { queryFulfilled } = api;
        try {
          const data = await queryFulfilled;
          console.log("===== onQueryStarted || getProducts:", data);
        } catch (error) {
          console.log("===== onQueryStarted ERROR || getProducts:", error);
        }
      },
    }),
  }),
});

export const { useGetProductsQuery } = getProductsApi;
