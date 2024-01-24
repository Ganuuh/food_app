const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const { connectToDatabase } = require("./database");
const { User } = require("./model/user.model");
connectToDatabase();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/signUp", async (req, res) => {
  try {
    const { name, email, password, address } = req.body;

    const user = await User.findOne({ email: email });

    if (user) {
      return res.status(401).json({
        message: "Email already registered",
      });
    }

    await User.create({
      name,
      email,
      password,
      address,
    });

    const userId = await User.findOne({ email: email });

    const id = userId._id;

    const token = jwt.sign({ id }, "secret-key");

    res.json({ token });
  } catch (error) {
    return res.status(401).json({
      message: "Error in backend",
    });
  }
});

app.post("/logIn", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      return res
        .status(401)
        .json({ message: "User not found , please sign up" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Wrong password" });
    }

    const id = user._id;

    const token = jwt.sign({ id }, "secret-key");

    res.json({ token });
  } catch (error) {
    console.log(error, "Sign in error");
  }
});
const port = 8008;
app.listen(port, () => {
  console.log("App is listening on port ", port);
});
