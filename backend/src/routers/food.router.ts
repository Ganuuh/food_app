import { Router } from "express";
import { addFood, getFoods } from "../controllers";

const foodRouter = Router();

foodRouter.post("/add", addFood).get("/getAll", getFoods);

export default foodRouter;
