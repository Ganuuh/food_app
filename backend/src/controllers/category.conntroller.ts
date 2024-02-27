import { RequestHandler } from "express";
import { CategoryModel } from "../models/category.model";

export const AddCategory: RequestHandler = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await CategoryModel.findOne({ name: name });

    if (category) {
      return res.status(404).json({ message: "Category already exists" });
    }

    await CategoryModel.create({ name: name });

    res.json({ message: "Category added!" });
  } catch (error) {}
};

export const getCategory: RequestHandler = async (req, res) => {
  try {
    const categories = await CategoryModel.find({});

    res.json({ categories: categories });
  } catch (error) {}
};
