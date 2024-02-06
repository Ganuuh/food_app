import { Schema, model } from "mongoose";

const CardSchema = new Schema({ userId: String, id: String, quantity: Number });

export const CardModel = model("card", CardSchema);
