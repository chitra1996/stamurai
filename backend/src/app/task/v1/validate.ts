import { ITaskRequest } from "./interface";

export const validateCreateRequest = (taskPayload: ITaskRequest): any => {
    try {
        let result = {
            isHandled: true,
            message: null,
        };
        if (!taskPayload)
            result.message = "No data received in the body request";
        else if (!taskPayload.title)
            result.message = "title required for task request";
        else if (!taskPayload.body)
            result.message = "description required for task request";

        if (result.message) return result;

        return {};
    } catch (error) {
        return {
            message: "Something went wrong, please try again later",
            isHandled: true,
        };
    }
};
