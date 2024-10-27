import { ENDPOINTS } from "./endpoints";

const { GET_CURRENT_USER, GET_PRODUCTS } = ENDPOINTS;

export const endpointsWithBearerToken: string[] = [
  GET_CURRENT_USER.KEY,
  GET_PRODUCTS.KEY,
];
