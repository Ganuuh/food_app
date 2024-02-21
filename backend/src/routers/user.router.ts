import { Router } from "express";
import {
  changeInformation,
  getUser,
  getUserName,
} from "../controllers/user.controller";

const userRouter = Router();

userRouter
  .get("/getUser", getUser)
  .get("/getUserName", getUserName)
  .post("/changeInfo", changeInformation);

export default userRouter;
