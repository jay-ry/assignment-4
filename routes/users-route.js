const express = require("express"); //import express
const router = express.Router(); //create express app
const bodyParser = require("body-parser"); //import body-parser

const UserModel = require("../models/userModel.js");

// Assignment 4
router.put("/updateSub", function (req, res) {
  ProdModel.findOneAndUpdate(
    { email: req.body.email },
    { $set: { subscription: req.body.subscription } },
    { new: true }
  )
    .then(function (prodDoc) {
      res.json(prodDoc);
      console.log(prodDoc);
    })
    .catch(function (err) {
      console.log("/product/update error", err);
      res.send("An Error Occurred");
    });
});

router.post("/register", function (req, res) {
  let newInfo = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  };
  UserModel.create(newInfo)
    .then(function (dbDocument) {
      res.json(dbDocument);
    })
    .catch(function (err) {
      console.log("/register error", err);
    });
});

router.post("/find", function (req, res) {
  UserModel.find({ firstName: req.body.firstName })
    .then(function (dbDocument) {
      res.json(dbDocument);
      console.log(dbDocument);
    })
    .catch(function (err) {
      console.log("/find error", err);
      res.send("An Error Occurred");
    });
});

router.put("/update", function (req, res) {
  let updates = {};

  if (req.body.firstName) {
    updates["firstName"] = req.body.firstName;
  }
  if (req.body.lastName) {
    updates["lastName"] = req.body.lastName;
  }
  if (req.body.phone) {
    updates["phone"] = req.body.phone;
  }

  UserModel.findOneAndUpdate(
    {
      email: req.body.email,
    },
    {
      $set: updates,
    },
    {
      new: true,
    }
  )
    .then(function (dbDocument) {
      res.json(dbDocument);
      console.log(dbDocument);
    })
    .catch(function (err) {
      console.log("/users/update error", err);
      res.send("An Error Occurred");
    });
});

module.exports = router;
