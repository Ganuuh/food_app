import { RequestHandler } from "express";
import { CategoryModel } from "../models/category.model";

export const AddCategory: RequestHandler = async (req, res) => {
  const { name } = req.body;
  try {
    await CategoryModel.create({ name: name });

    res.json({ message: "Category added!" });
  } catch (error) {}
};

export const getCategory: RequestHandler = async (req, res) => {
  try {
    const categories = await CategoryModel.find({});

    res.json({ categories: categories });

    console.log(categories);
  } catch (error) {}
};
