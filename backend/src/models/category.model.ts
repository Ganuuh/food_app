import { Schema, model } from "mongoose";

const mongoose = require("mongoose");

const CategorySchema = new Schema({ name: String });

export const CategoryModel = model("categories", CategorySchema);
