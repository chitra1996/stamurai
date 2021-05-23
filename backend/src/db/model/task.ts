//Require Mongoose
import mongoose from "mongoose";

//Define a schema
const Schema = mongoose.Schema;

export interface ITaskDTO {
    _id: string;

    title: string;
    body: string;
    createdBy: string;
    approvedby: Array<string>;

    createdAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;

    schema_version?: number;
}

const TaskSchema = new Schema(
    {
        createdBy: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        approvedby: {
            type: Array,
            required: true,
            default: [],
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
export const Task = mongoose.model<ITaskDTO>("Task", TaskSchema);
