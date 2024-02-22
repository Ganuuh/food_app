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
    number: Number,
    profilePic: String,
    password: {
      type: String,
      required: true,
    },
    otp: { type: String, required: false },
  },
  { timestamps: true }
);

export const UserModel = model("user", userSchema);
