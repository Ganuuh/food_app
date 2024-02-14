import { Router } from "express";
import { sendOTP } from "../controllers/email.controller";

const emailRouter = Router();

emailRouter.post("/sendOtp", sendOTP);

export default emailRouter;
