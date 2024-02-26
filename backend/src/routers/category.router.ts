import { Router } from "express";
import { AddCategory, getCategory } from "../controllers/category.conntroller";

const categoryRouter = Router();

categoryRouter
  .post("/addCategory", AddCategory)
  .get("/getCategory", getCategory);

export default categoryRouter;
