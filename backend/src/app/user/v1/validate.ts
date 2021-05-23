import { IUserRequest } from "./interface";

export const validateCreateRequest = (userPayload: IUserRequest): any => {
    try {
        let result = {
            isHandled: true,
            message: null,
        };
        if (!userPayload)
            result.message = "No data received in the body request";
        // else if (!userPayload.userName)
        //     result.message = "username required for user request";
        else if (!userPayload.password)
            result.message = "password required for user request";
        else if (!userPayload.firstName)
            result.message = "firstName required for user request";
        else if (!userPayload.lastName)
            result.message = "lastName required for user request";

        if (result.message) return result;

        return {};
    } catch (error) {
        return {
            message: "Something went wrong, please try again later",
            isHandled: true,
        };
    }
};
