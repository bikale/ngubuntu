const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const courseRoute = require("./route/course");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(courseRoute);

mongoose.connect("mongodb://localhost:27017/courseapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(5000, () => {
  console.log("server is running.....");
});
