import { IUserDTO } from "./../db/model/user";
import { fetchUserDAL } from "../db/dal/user";
import { NextFunction, Request, Response } from "express";
import { IUserRequest } from "../app/user/v1/interface";
import { handleError } from "../utils/handleError";

export const validateAdmin = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    try {
        const createUserPayload: IUserRequest = req.body;

        if (!req.user.isAdmin)
            return res.status(403).json({
                message: "Unauthorised",
                error: true,
            });

        const user: IUserDTO = await fetchUserDAL({
            userName: createUserPayload.userName,
        });

        if (
            user &&
            createUserPayload.userName &&
            createUserPayload.userName == user.userName
        ) {
            return handleError(res, {
                message: "userName not allowed",
                isHandled: true,
            });
        }

        return next();
    } catch (error) {
        return handleError(res, error);
    }
};
