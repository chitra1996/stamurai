import { NextFunction, Request, Response } from "express";
import { appConfig } from "../config/appConfig";
import jwt from "jsonwebtoken";

export const validateUser = (req: any, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;

        if (authHeader) {
            const token = authHeader.split(" ")[1];

            jwt.verify(token, appConfig.secret, (err, user) => {
                if (err) {
                    return res.status(403).json({
                        message: "User is unauthorized",
                        error: true,
                    });
                }

                if (user && !user.isUser) {
                    return res.status(403).json({
                        message: "User is unauthorized",
                        error: true,
                    });
                }

                req.user = user;
                return next();
            });
        } else {
            res.status(401).json({
                message: "authorization token needed",
                error: true,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong, please try again later",
            error: true,
        });
    }
};
