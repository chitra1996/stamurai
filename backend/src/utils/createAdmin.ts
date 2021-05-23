import { User } from "../db/model/user";

export const createFirstUser = async () => {
    try {
        const firstAdmin = {
            "userName": "admin-user",
            "password": "admin-password",
            "firstName": "admin",
            "lastName": "user",
            "isAdmin": true
        }

        // Create an instance of model User
        var userInstance = new User(firstAdmin);

        // Save the new model instance, passing a callback
        const user = await userInstance.save();
        console.log({
            "first_admin_user": user
        })
        return;
    } catch (error) {
        console.log({ error })
        return error;
    }
}