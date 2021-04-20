export interface IAuthResponse {
  success: boolean,
  data: ICredentials
}


export interface ICredentials {
  accessToken: string;
  refreshToken: string;
}
