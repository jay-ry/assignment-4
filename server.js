const express = require("express"); //import express
const server = express(); //create express app
const bodyParser = require("body-parser"); //import body-parser
const mongoose = require("mongoose"); //import mongoose
require("dotenv").config(); //import dotenv

const productRoute = require("./routes/product-route.js");
const userRoute = require("./routes/users-route.js");

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

const dbUrl = process.env.DB_URL;

const dbConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(dbUrl, dbConfig)
  .then(function () {
    console.log("Connected to MongoDB");
  })
  .catch(function (err) {
    console.log("Error connecting to MongoDB", err);
  });

server.get("/", function (req, res) {
  res.send("This is the Home Page");
});
server.use("/users", userRoute);
server.use("/product", productRoute);

server.listen(process.env.PORT, function () {
  console.log("Running on http://localhost:" + process.env.PORT);
});
