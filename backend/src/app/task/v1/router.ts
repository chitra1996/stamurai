import { Router } from "express";
import { createTask, fetchAllTasks, fetchTask, updateTask } from "./controller";
import { validateReviewer } from "../../../middlewares/validateReviewer";
import { validateAdmin } from "../../../middlewares/validateAdmin";

const taskRouter: Router = Router();

taskRouter.post("/", createTask);
taskRouter.post("/:taskId", validateReviewer, updateTask);

taskRouter.get("/all", validateAdmin, fetchAllTasks);
taskRouter.get("/:createdBy", fetchTask);

export { taskRouter };
