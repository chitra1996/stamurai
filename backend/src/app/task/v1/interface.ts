export interface ITaskRequest {
    title: string;
    body: string;
    approvedBy: Array<string>;
    createdBy: string;
}

export interface ITaskResponse {
    _id: string;
    title: string;
    body: string;
    approvedby: Array<string>;
    createdAt: Date;
}
