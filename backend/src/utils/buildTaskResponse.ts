import { ITaskResponse } from "app/task/v1/interface";
import _ from "lodash";

export const buildTaskResponse = (taskData: any): ITaskResponse => {
    try {
        const taskResponse: ITaskResponse = _.pick(taskData, [
            "_id",
            "title",
            "body",
            "approvedby",
            "createdBy",
            "createdAt",
        ]);

        return taskResponse;
    } catch (error) {
        return error;
    }
};
