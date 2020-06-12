const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const carRoute = require("./route/cars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(carRoute);

mongoose
  .connect("mongodb://localhost:27017/carapi", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => {
    console.log("DB connected.....");
    app.listen(3000, () => {
      console.log("server is running.....");
    });
  });
