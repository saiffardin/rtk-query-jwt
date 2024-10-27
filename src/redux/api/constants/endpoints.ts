enum LOGIN {
  KEY = "login",
  URL = "auth/login",
}

enum GET_CURRENT_USER {
  KEY = "getCurrentUser",
  URL = "auth/me",
}

enum GET_PRODUCTS {
  KEY = "getProducts",
  URL = "auth/products?limit=3",
}

export const ENDPOINTS = {
  LOGIN,
  GET_CURRENT_USER,
  GET_PRODUCTS,
};
