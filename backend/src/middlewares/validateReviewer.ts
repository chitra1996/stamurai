import { NextFunction, Request, Response } from "express";
import { handleError } from "../utils/handleError";
import { ITaskRequest } from "../app/task/v1/interface";

export const validateReviewer = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    try {
        const approveTaskPayload: ITaskRequest = req.body;

        if (approveTaskPayload.approvedBy && !req.user.isReviewer) {
            return res.status(403).json({
                message: "Unauthorised",
                error: true,
            });
        }
        next();
    } catch (error) {
        return handleError(res, error);
    }
};
