export interface Login {
  username: string;
  password: string;
  expiresInMins: number;
}

export interface LoginRes {
  accessToken?: string;
  refreshToken?: string;
  id?: number;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  image?: string;
}
