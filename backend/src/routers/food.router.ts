import { Router } from "express";
import {
  addFood,
  addFoodList,
  getCardFood,
  getFoodById,
  getFoods,
} from "../controllers";

const foodRouter = Router();

foodRouter
  .post("/add", addFood)
  .get("/getAll", getFoods)
  .get("/getCardFood", getCardFood)
  .post("/getById", getFoodById)
  .post("/addCardFood", addFoodList);

export default foodRouter;
