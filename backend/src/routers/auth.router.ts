import { Router } from "express";
import { logIn, signUp } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/logIn", logIn).post("/signUp", signUp);

export default authRouter;
