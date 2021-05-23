//Require Mongoose
import mongoose from "mongoose";

//Define a schema
const Schema = mongoose.Schema;

export interface IUserDTO {
    _id: string;

    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    reviewers?: Array<string>;

    isAdmin?: Boolean;
    isReviewer?: Boolean;

    createdAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    schema_version?: number;
}

const UserSchema = new Schema(
    {
        firstName: {
            type: String,
            required: false,
        },
        lastName: {
            type: String,
            required: false,
        },
        userName: {
            type: String,
            required: false,
            unique: true,
        },
        password: {
            type: String,
            required: false,
        },
        reviewers: {
            type: Array,
            required: false,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
        isReviewer: {
            type: Boolean,
            required: true,
            default: false,
        },

        schema_version: {
            type: Number,
            required: true,
            default: 1,
        },
    },
    {
        timestamps: true,
    }
);

// Compile model from schema
export const User = mongoose.model<IUserDTO>("User", UserSchema);