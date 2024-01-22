const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const { connectToDatabase } = require("./database");
connectToDatabase();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 8008;

app.listen(port, () => {
  console.log("App is listening on port ", port);
});
