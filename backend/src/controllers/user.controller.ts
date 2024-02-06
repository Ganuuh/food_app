import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../models";

export const getUser: RequestHandler = async (req, res) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: "No token found" });
    }

    const payload = jwt.verify(authorization, "secret-key");

    const { id } = payload;

    const user = await UserModel.findOne({ _id: id });

    if (!user) {
      console.log("baihgu bn");
    }
    console.log(user);
  } catch (error) {
    res.status(401).json({
      message: error,
    });
  }
};
