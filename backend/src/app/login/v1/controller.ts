import { appConfig } from "./../../../config/appConfig";
import { NextFunction, Request, Response } from "express";
import { validateloginRequest } from "./validate";
import { IUserLoginRequest, IUserLoginResponse } from "./interface";
import { fetchUserDAL } from "../../../db/dal/user";
import jwt from "jsonwebtoken";
import { handleError } from "../../../utils/handleError";

export const login = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const loginPayload: IUserLoginRequest = req.body;
        const isValidLogin = await validateloginRequest(loginPayload);
        if (isValidLogin.isHandled) {
            return handleError(res, isValidLogin);
        }

        const user = await fetchUserDAL(loginPayload);

        if (user && user._id) {
            // Generate an access token
            const authToken = jwt.sign(
                {
                    id: user._id,
                    userName: loginPayload.userName,
                    password: loginPayload.password,
                    isAdmin: user.isAdmin,
                    isReviewer: user.isReviewer,
                    isUser: true,
                },
                appConfig.secret
            );

            const result: IUserLoginResponse = {
                authToken,
            };

            res.json(result);
        } else {
            return handleError(res, {
                message: "Username or password incorrect",
                isHandled: true,
            });
        }
    } catch (error) {
        return handleError(res, error);
    }
};
