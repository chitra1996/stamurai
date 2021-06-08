import { ITaskRequest, ITaskResponse } from "app/task/v1/interface";
import { ITaskDTO, Task } from "../model/task";
import _ from "lodash";
import { Types } from "mongoose";

export const createTaskDAL = async (payload: ITaskRequest): Promise<any> => {
    try {
        // Create an instance of model Task
        var taskInstance = new Task(payload);

        // Save the new model instance, passing a callback
        const task = await taskInstance.save();
        return task;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const fetchTaskDAL = async (payload: any): Promise<ITaskDTO[]> => {
    try {
        let task: ITaskDTO[];

        let filterOptions = {};
        payload.createdBy
            ? (filterOptions["createdBy"] = payload.createdBy)
            : null;
        payload.approvedBy
            ? (filterOptions["approvedBy"] = payload.approvedBy)
            : null;
        payload.taskId
            ? (filterOptions["_id"] = Types.ObjectId(payload.taskId))
            : null;

        task = await Task.find(filterOptions);

        return task;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const fetchAllTasksDAL = async (): Promise<ITaskDTO[]> => {
    try {
        const task: ITaskDTO[] = await Task.find().sort({ "createdAt": "desc" });
        return task;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const updateTaskDAL = async (
    taskId: string,
    updateTaskPayload: any
): Promise<boolean> => {
    try {
        const task: ITaskDTO = await Task.findByIdAndUpdate(
            taskId,
            updateTaskPayload
        );
        if (task) {
            return true;
        } else return false;
    } catch (error) {
        return Promise.reject(error);
    }
};
