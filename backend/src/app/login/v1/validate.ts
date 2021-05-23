import { IUserLoginRequest } from "./interface";

export const validateloginRequest = (userPayload: IUserLoginRequest): any => {
    try {
        let result = {
            isHandled: true,
            message: null,
        };
        if (!userPayload)
            result.message = "No data received in the body request";
        else if (!userPayload.userName)
            result.message = "username required for login request";
        else if (!userPayload.password)
            result.message = "password required for login request";

        if (result.message) return Promise.reject(result);

        return {};
    } catch (error) {
        return {
            message: "Something went wrong, please try again later",
            isHandled: true,
        };
    }
};
