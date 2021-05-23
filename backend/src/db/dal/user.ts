import { IUserDTO } from "../model/user";
import { User } from "../model/user";
import { IUserRequest } from "app/user/v1/interface";
import _ from "lodash";

export const createUserDAL = async (payload: IUserRequest): Promise<any> => {
    try {
        // Create an instance of model User
        var userInstance = new User(payload);

        // Save the new model instance, passing a callback
        const user = await userInstance.save();
        return user;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const fetchUserDAL = async (payload): Promise<IUserDTO> => {
    try {
        let user: IUserDTO;

        if (payload.userId) {
            user = await User.findById(payload.userId);
        } else if (payload) {
            let filterOptions = {};
            payload.userName
                ? (filterOptions["userName"] = payload.userName)
                : null;
            payload.password
                ? (filterOptions["password"] = payload.password)
                : null;

            user = await User.findOne(filterOptions);
        }

        return user;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const fetchAllUserDAL = async (): Promise<any[]> => {
    try {
        const user = await User.find();
        return user;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const updateUserDAL = async (userId: string, payload: any) => {
    try {
        const user = await User.findByIdAndUpdate(userId, payload);
        if (user) {
            return user.toJSON();
        } else return;
    } catch (error) {
        return Promise.reject(error);
    }
};
