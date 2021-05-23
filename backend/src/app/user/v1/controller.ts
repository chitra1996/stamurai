import { NextFunction, Request, Response } from "express";
import { IUserRequest } from "./interface";
import {
    fetchUserDAL,
    fetchAllUserDAL,
    createUserDAL,
    updateUserDAL,
} from "../../../db/dal/user";
import { buildUserResponse } from "../../../utils/buildUserResponse";
import { handleError } from "../../../utils/handleError";
import { validateCreateRequest } from "./validate";

export const create = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const createUserPayload: IUserRequest = req.body;
        const validationResult = validateCreateRequest(createUserPayload);
        if (validationResult.isHandled) {
            return handleError(res, validationResult);
        }
        const user = await createUserDAL(createUserPayload);
        const finalResult = buildUserResponse(user);
        res.json(finalResult);
    } catch (error) {
        return handleError(res, error);
    }
};

export const fetch = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const userId = req.params.userId;
        const user = await fetchUserDAL({ userId });
        const finalResult = buildUserResponse(user);
        res.json(finalResult);
    } catch (error) {
        return handleError(res, error);
    }
};

export const fetchAll = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = await fetchAllUserDAL();
        let finalResult = [];
        if (user && user.length > 0) {
            user.forEach((user) => {
                finalResult.push(buildUserResponse(user));
            });
        }
        res.json(finalResult);
    } catch (error) {
        return handleError(res, error);
    }
};

export const update = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const userId: string = req.params.userId;
        const updateUserPayload: IUserRequest = req.body;

        const user = await fetchUserDAL({ userId });
        if (user && updateUserPayload.isAdmin && user.isAdmin) {
            return handleError(res, {
                message: "Can not remove admin rights from admin user",
                isHandled: true,
            });
        }

        const updatedUser = await updateUserDAL(userId, updateUserPayload);
        const finalResult = buildUserResponse(updatedUser);
        res.json(finalResult);
    } catch (error) {
        return handleError(res, error);
    }
};
