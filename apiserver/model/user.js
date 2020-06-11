const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = require("mongodb").ObjectID;

const userSchema = new Schema({
  email: String,
  password: String,
  role: { type: String, default: "user" },
});

module.exports = mongoose.model("User", userSchema); //cars
