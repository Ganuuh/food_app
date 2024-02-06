import { Router } from "express";
import { addFood, addFoodList, getFoodById, getFoods } from "../controllers";

const foodRouter = Router();

foodRouter
  .post("/add", addFood)
  .get("/getAll", getFoods)
  .post("/getById", getFoodById)
  .post("/addCardFood", addFoodList);

export default foodRouter;
