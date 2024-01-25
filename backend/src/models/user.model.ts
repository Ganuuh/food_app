import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      defaultValue: "User",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: String,
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const UserModel = model("user", userSchema);
