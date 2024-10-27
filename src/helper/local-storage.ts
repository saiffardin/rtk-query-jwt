const LS_ACCESS_TOKEN = "access_token";
const LS_REFRESH_TOKEN = "refresh_token";

interface TokensType {
  access_token: string | undefined;
  refresh_token: string | undefined;
}

export const lsSetToken = (obj: TokensType) => {
  const { access_token, refresh_token } = obj;

  if (access_token) {
    localStorage.setItem(LS_ACCESS_TOKEN, JSON.stringify(access_token));
  }

  if (refresh_token) {
    localStorage.setItem(LS_REFRESH_TOKEN, JSON.stringify(refresh_token));
  }
};

export const lsGetToken = (): TokensType => {
  const ls_access = localStorage.getItem(LS_ACCESS_TOKEN);
  const ls_refresh = localStorage.getItem(LS_REFRESH_TOKEN);

  const access_token = ls_access ? JSON.parse(ls_access) : "";
  const refresh_token = ls_refresh ? JSON.parse(ls_refresh) : "";

  return { access_token, refresh_token };
};

export const lsRemoveToken = () => {
  const { access_token, refresh_token } = lsGetToken();

  if (access_token) {
    localStorage.removeItem(LS_ACCESS_TOKEN);
  }

  if (refresh_token) {
    localStorage.removeItem(LS_REFRESH_TOKEN);
  }
};
