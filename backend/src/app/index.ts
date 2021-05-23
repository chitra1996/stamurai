import { Router } from "express";
import { taskRouter } from "./task/v1/router";
import { userRouter } from "./user/v1/router";
import { loginRouter } from "./login/v1/router";
import { validateUser } from "../middlewares/validateUser";

const appRouter: Router = Router();

appRouter.use("/login", loginRouter);
appRouter.use("/task", validateUser, taskRouter);
appRouter.use("/user", validateUser, userRouter);

export { appRouter };
