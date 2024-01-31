import { Router } from "express";
import { addFood, getFoodById, getFoods } from "../controllers";

const foodRouter = Router();

foodRouter
  .post("/add", addFood)
  .get("/getAll", getFoods)
  .post("/getById", getFoodById);

export default foodRouter;
