import express from "express";
import cors from "cors";
import { json } from "body-parser";
import authRouter from "./routers/auth.router";
import foodRouter from "./routers/food.router";
import userRouter from "./routers/user.router";
import emailRouter from "./routers/email.router";
import passwordRouter from "./routers/password.router";
import categoryRouter from "./routers/category.router";

const app = express();
app.use(json());
app.use(cors());

app.use("/", authRouter);
app.use("/foods", foodRouter);
app.use("/", userRouter);
app.use("/", emailRouter);
app.use("/", passwordRouter);
app.use("/", categoryRouter);
export default app;
