import { Router } from "express";
import { login } from "./controller";

const loginRouter: Router = Router();

loginRouter.post("/", login);

export { loginRouter };
