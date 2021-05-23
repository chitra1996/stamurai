export interface IUserRequest {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    isAdmin?: Boolean;
    isReviewer?: Boolean;
}

export interface IUserResponse {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    isAdmin?: Boolean;
    isReviewer?: Boolean;
    status: Boolean;
    createdAt: Date;
}
