import { NextFunction, Request, Response } from "express";
import { handleError } from "../../../utils/handleError";
import { ITaskRequest } from "./interface";
import {
    createTaskDAL,
    fetchAllTasksDAL,
    fetchTaskDAL,
    updateTaskDAL,
} from "../../../db/dal/task";
import { buildTaskResponse } from "../../../utils/buildTaskResponse";
import { validateCreateRequest } from "./validate";
import { ITaskDTO } from "../../../db/model/task";
import { fetchUserDAL } from "../../../db/dal/user";
import _ from "lodash";

export const createTask = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    try {
        const createTaskPayload: ITaskRequest = req.body;
        const validationResult = validateCreateRequest(createTaskPayload);
        if (validationResult.isHandled) {
            return handleError(res, validationResult);
        }

        createTaskPayload.createdBy = req.user.id;

        const task = await createTaskDAL(createTaskPayload);
        const finalResult = buildTaskResponse(task);
        res.json(finalResult);
    } catch (error) {
        return handleError(res, error);
    }
};

export const fetchTask = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const createdBy = req.params.createdBy ? req.params.createdBy : null;
        const taskId = req.query.taskId ? req.query.taskId : null;
        const approvedBy = req.query.approvedBy ? req.query.approvedBy : null;
        let finalResult = [];

        const task: ITaskDTO[] = await fetchTaskDAL({
            createdBy,
            taskId,
            approvedBy,
        });

        if (task && task.length > 0) {
            task.forEach((task) => {
                finalResult.push(buildTaskResponse(task));
            });
        }

        res.json(finalResult);
    } catch (error) {
        return handleError(res, error);
    }
};

export const fetchAllTasks = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const task: ITaskDTO[] = await fetchAllTasksDAL();
        let finalResult = [];
        let resultPromise = [];
        if (task && task.length > 0) {
            task.forEach((task) => {
                finalResult.push(buildTaskResponse(task));
            });
        }
        res.json(finalResult);
    } catch (error) {
        return handleError(res, error);
    }
};

export const updateTask = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    try {
        const taskId: string = req.params.taskId;
        const updateTaskPayload: ITaskRequest = req.body;

        const task: ITaskDTO[] = await fetchTaskDAL({
            taskId,
        });

        if (task && task.length > 0) {
            const user = await fetchUserDAL({ userId: task[0].createdBy });
            let updatedTask;
            if (
                user.reviewers.includes(req.user.id) &&
                !task[0].approvedby.includes(req.user.id)
            ) {
                updatedTask = await updateTaskDAL(taskId, {
                    approvedby: task[0].approvedby.concat(req.user.id),

                });
            } else if (req.user.id === task[0].createdBy) {
                updatedTask = await updateTaskDAL(
                    taskId,
                    _.omit(updateTaskPayload, ["approvedby"])
                );
            } else {
                return res.json({
                    message:
                        "You don't have the permission to update this task",
                    error: true,
                });
            }
            if (updatedTask) {
                return res.json({
                    message: "Task updated successfully",
                    error: false,
                });
            } else {
                return res.json({
                    message: "Task could not update",
                    error: true,
                });
            }
        }
        return handleError(res, {
            message: "You don't have the permission to update this task",
            isHandled: true,
        });
    } catch (error) {
        return handleError(res, error);
    }
};
