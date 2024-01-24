const mongooose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongooose.connect(
      "mongodb+srv://Ganuuhu:Ganbold0818!@cluster0.50i5m04.mongodb.net/food_app"
    );

    console.log("Connected to Database");
  } catch (error) {
    console.log(error, "Error occured to connect to database");
  }
};

module.exports = {
  connectToDatabase,
};
