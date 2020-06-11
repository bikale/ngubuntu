const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = require("mongodb").ObjectID;

const carsSchema = new Schema({
  brand: String,
  manufacturer: String,
  year: Number,
  mileage: Number,
  rate: Number,
  available: Boolean,
  rental_records: [
    {
      reservation_id: ObjectId,
      driver_license: String,
      start_date: Date,
      return_date: Date,
    },
  ],
});

module.exports = mongoose.model("Car", carsSchema); //cars
