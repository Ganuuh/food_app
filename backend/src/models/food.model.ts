import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  name: String,
  image: String,
  ingredient: String,
  price: Number,
  newPrice: Number,
});

export const FoodModel = model("foods", foodSchema);
