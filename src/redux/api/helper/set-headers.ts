import { SetHeadersType } from "./types";
import { ENDPOINTS } from "../constants/endpoints";
import { lsGetToken } from "../../../helper/local-storage";

const { GET_CURRENT_USER } = ENDPOINTS;

export const setHeaders: SetHeadersType = (headers, api) => {
  const { endpoint } = api;
  // console.log("set headers API:", api);

  const endpointsWithBearerToken: string[] = [GET_CURRENT_USER.KEY];

  if (endpointsWithBearerToken.includes(endpoint)) {
    /*
    const reduxState = getState();
    console.log({ reduxState });
    */
    /** EDGE CASE
     * when an api, which requires auth-token, is called after page-refresh
     * how we can handle this ?
     * bcz when a page-refresh happens, redux store gets cleared.
     * and by the time we put auth-token to redux-store again (from local-storage)
     * 'getState()' already been executed,
     * and the store doesn't have any token at that point of time.
     */

    const { access_token } = lsGetToken();

    if (access_token) {
      headers.set("Authorization", `Bearer ${access_token}`);
    }
  }

  return headers;
};
