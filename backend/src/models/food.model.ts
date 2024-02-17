import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  name: String,
  image: String,
  ingredient: String,
  price: Number,
  newPrice: Number,
  category: String,
});

export const FoodModel = model("foods", foodSchema);
