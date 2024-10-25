import { ProductRes } from "../../types/products";
import { dummyJsonApi } from "./auth.api";
import { ENDPOINTS } from "./constants/endpoints";

const { GET_CURRENT_USER } = ENDPOINTS;

const currentUserApi = dummyJsonApi.injectEndpoints({
  endpoints: (builder) => ({
    [GET_CURRENT_USER.KEY]: builder.query<ProductRes, unknown>({
      query: () => ({ url: GET_CURRENT_USER.URL }),
    }),
  }),
});

export const { useGetCurrentUserQuery } = currentUserApi;
