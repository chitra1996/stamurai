import { IUserResponse } from "app/user/v1/interface";
import _ from "lodash";

export const buildUserResponse = (userData: any): IUserResponse => {
    try {
        const userResponse: IUserResponse = _.pick(userData, [
            "_id",
            "firstName",
            "lastName",
            "userName",
            "password",
            "isAdmin",
            "isReviewer",
            "createdAt",
            "reviewers",
        ]);

        return userResponse;
    } catch (error) {
        return error;
    }
};
