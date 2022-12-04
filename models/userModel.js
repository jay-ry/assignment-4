const mongoose = require("mongoose");

// Create a schema for the database
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  dob: {
    type: Date,
    required: false,
  },
  avatar: {
    type: String,
    required: false,
  },
  subscription: {
    type: Boolean,
    required: true,
    default: false,
  },
  dateCreated: {
    type: Date,
    require: true,
    default: Date.now,
  },
});

const UserModel = mongoose.model("Users", UserSchema);

module.exports = UserModel;
