import { RequestHandler } from "express";
import { UserModel } from "../models";

export const updatePassword: RequestHandler = async (req, res) => {
  const { password, email, otp } = req.body;

  console.log(password, email, otp);
  try {
    const user = await UserModel.findOne({ email: email, otp: otp });

    if (user) {
      await UserModel.findOneAndUpdate(
        { email: email },
        { $set: { password: password } }
      );
      await UserModel.findOneAndUpdate({ email: email }, { $set: { otp: "" } });

      res.json({
        message: `${email} хаяг дээрх нууц үг өөрчлөгдлөө`,
      });
    } else {
      res.status(401).json({ message: "Wrong verification code" });
    }
  } catch (error) {}
};
