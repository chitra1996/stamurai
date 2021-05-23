import { Router } from "express";
import { create, fetchAll, fetch, update } from "./controller";
import { validateAdmin } from "../../../middlewares/validateAdmin";

const userRouter: Router = Router();

userRouter.post("/", validateAdmin, create);
userRouter.post("/:userId", validateAdmin, update);

userRouter.get("/all", validateAdmin, fetchAll);
userRouter.get("/:userId", fetch);

export { userRouter };
