import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Ganuuhu:Ganbold0818!@cluster0.50i5m04.mongodb.net/food_app"
    );

    console.log("Connected to Database");
  } catch (error) {
    console.log(error, "Error occured to connect to database");
  }
};
