import { RequestHandler } from "express";
import { UserModel } from "../models";
import jwt from "jsonwebtoken";

export const signUp: RequestHandler = async (req, res) => {
  try {
    const { name, email, password, address } = req.body;

    const user = await UserModel.findOne({ email: email });

    if (user) {
      return res.json({
        message: "Email already registered",
      });
    }

    const createdUser = await UserModel.create({
      name,
      email,
      password,
      address,
    });

    const id = createdUser?._id;

    const token = jwt.sign({ id }, "secret-key");

    res.json({ token });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "Error in backend",
    });
  }
};

export const logIn: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res
        .status(401)
        .json({ message: "User not found , please sign up" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Wrong password" });
    }

    const id = user._id;

    const name = user.name;

    const token = jwt.sign({ id }, "secret-key");

    res.json({ token, name });
  } catch (error) {
    console.log(error, "Sign in error");
  }
};
