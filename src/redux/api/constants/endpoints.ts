enum LOGIN {
  KEY = "login",
  URL = "auth/login",
}

enum GET_CURRENT_USER {
  KEY = "getCurrentUser",
  URL = "auth/me",
}

export const ENDPOINTS = {
  LOGIN: LOGIN,
  GET_CURRENT_USER: GET_CURRENT_USER,
};
