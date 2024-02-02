import { RequestHandler } from "express";
import { FoodModel } from "../models/food.model";

export const addFood: RequestHandler = async (req, res) => {
  try {
    const { name, image, ingredient, price, newPrice } = req.body;

    await FoodModel.create({
      name,
      image,
      ingredient,
      price,
      newPrice,
    });

    res.json({
      message: "Food added to your store",
    });
  } catch (error) {
    res.status(401).json({
      message: "Error occured in backend",
    });
  }
};

export const getFoods: RequestHandler = async (req, res) => {
  try {
    const foods = await FoodModel.find({});
    res.json(foods);
  } catch (error) {
    res.status(401).json({
      message: "Failed to get retrieve foods from server",
    });
  }
};

export const getFoodById: RequestHandler = async (req, res) => {
  try {
    const { id } = req.body;

    if (id === "") {
      return;
    }

    const food = await FoodModel.findOne({ _id: id });

    res.json({
      food,
    });
  } catch (error) {
    res.status(401).json({
      message: "Error to get food by id",
    });
  }
};