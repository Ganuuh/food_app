import { RequestHandler } from "express";
import { UserModel } from "../models";

export const updatePassword: RequestHandler = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await UserModel.findOneAndUpdate(
      { email: email },
      { $set: { password: password } }
    );

    res.json({
      message: `${email} хаяг дээрх нууц үг өөрчлөгдлөө`,
    });
  } catch (error) {}
};
