import { Router } from "express";
import { updatePassword } from "../controllers/password.controller";

const passwordRouter = Router();

passwordRouter.post("/changePassword", updatePassword);

export default passwordRouter;
