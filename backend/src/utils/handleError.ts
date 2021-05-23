import { Response } from "express";

export const handleError = (res: Response, error: any) => {
    console.error(error);
    if (error.isHandled == true) {
        return res.status(400).json({
            message: error.message,
            error: true,
        });
    }
    return res.status(500).json({
        message: "Something went wrong, please try again later",
        error: true,
    });
};
