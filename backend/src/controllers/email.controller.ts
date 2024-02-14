import { RequestHandler } from "express";

import nodemailer from "nodemailer";
import { UserModel } from "../models";

export const sendOTP: RequestHandler = async (req, res) => {
  const { email } = req.body;

  const Otp = Math.floor(100000 + Math.random() * 900000);
  try {
    if (!email) {
      return res.json({ message: "Email not found" });
    }

    const user = UserModel.findOne({ email: email });

    if (!user) {
      return res.json({
        message: "User not found , Please sign in",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      secure: true,
      port: 465,

      auth: {
        user: "ganbold0818hu@gmail.com",
        pass: "qmpszzjsabxsifad",
      },
    });

    const mailOptions = {
      from: "ganbold0818hu@gmail.com",
      to: email,
      subject: "Email verification one time code",
      text: `Your one time code is ${Otp}`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "Email sent", otp: Otp });
  } catch (error) {
    res.json({ message: error });
  }
};
