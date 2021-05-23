export interface IUserLoginRequest {
    userName: string;
    password: string;
}

export interface IUserLoginResponse {
    authToken: String;
}
