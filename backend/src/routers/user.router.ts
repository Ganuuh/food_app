import { Router } from "express";
import { getUser, getUserName } from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/getUser", getUser).get("/getUserName", getUserName);

export default userRouter;
