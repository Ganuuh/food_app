import { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UserModel } from "../models";

export const getUser: RequestHandler = async (req, res) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: "No token found" });
    }

    const { id } = jwt.verify(authorization, "secret-key") as JwtPayload;

    const user = await UserModel.findOne({ _id: id });

    if (!user) {
      return console.log("baihgu bn");
    }
    res.json({
      user,
    });
  } catch (error) {
    res.status(401).json({
      message: error,
    });
  }
};

export const getUserName: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  try {
    const { id: userId } = jwt.verify(
      authorization,
      "secret-key"
    ) as JwtPayload;

    const user = await UserModel.findOne({ _id: userId });

    if (!user) {
      return res.status(401).json({
        message: "User not fount",
      });
    }

    res.json({
      userName: user.name,
      userProfile: user.profilePic,
    });
  } catch (error) {}
};

export const changeInformation: RequestHandler = async (req, res) => {
  const { name, number, email, picture } = req.body;
  const { authorization } = req.headers;

  console.log(picture);

  try {
    if (!authorization) {
      return res.status(401).json({ message: "No token found" });
    }

    const { id: userId } = jwt.verify(
      authorization,
      "secret-key"
    ) as JwtPayload;

    await UserModel.findOneAndUpdate(
      { _id: userId },
      {
        $set: { email: email, name: name, number: number, profilePic: picture },
      }
    );

    res.json({ message: "Information changed" });
  } catch (error) {
    console.log(error);
  }
};
