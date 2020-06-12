const route = require("express").Router();
const Cars = require("../model/car");
const User = require("../model/user");
const jwt = require("jsonwebtoken");

const ObjectId = require("mongodb").ObjectID;
// const carController = require("../controller/car");

const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization) {
    token = req.headers.authorization.split(" ")[1]; //Bearer dhdhdhdh
  }
  if (!token) {
    return res.json({
      status: "error",
      data: "you are not authorized to access this route",
    });
  }
  try {
    let decodedData = jwt.verify(token, "ubuntusecret"); // t or f
    let user = await User.findOne({ _id: decodedData.id });
    req.user = user;
    next();
  } catch (error) {
    return res.json({
      status: "error",
      data: "you are not authorized to access this route",
    });
  }
};

const authorize = (...role) => {
  return (req, res, next) => {
    if (role.includes(req.user.role)) {
      return next();
    }
    return res.json({
      status: "error",
      data: "user role is authorized to access this route",
    });
  };
};

route.post("/cars", protect, authorize("admin"), async (req, res, next) => {
  try {
    await Cars.create({
      brand: req.body.brand,
      manufacturer: req.body.manufacturer,
      year: req.body.year,
      mileage: req.body.mileage,
      rate: req.body.rate,
      available: req.body.available,
      rental_records: [],
    });
    res.status(201).json({ status: "Ok", data: "Successfully created" });
  } catch (error) {
    res.status(400).json({ status: "error", data: error.message });
  }
});

// reserve car
route.post("/cars/:car_id", async (req, res, next) => {
  try {
    const reserveId = new ObjectId();
    await Cars.updateOne(
      { _id: req.params.car_id },
      {
        $push: {
          rental_records: {
            reservation_id: reserveId,
            driver_license: req.body.driver_license,
            start_date: new Date(),
            return_date: "",
          },
        },
      }
    );
    res.status(201).json({ status: "ok", reservation_id: reserveId });
  } catch (error) {}
});

route.patch("/cars/:car_id/returncar/:reserve_id", async (req, res, next) => {
  await Cars.updateOne(
    {
      _id: req.params.car_id,
      "rental_records.reservation_id": req.params.reserve_id,
    },
    {
      "rental_records.$.return_date": req.body.return_date,
    }
  );
  res.json({ status: "ok", data: "the car is returned" });
});

route.delete(
  "/cars/:car_id/rentaldetail/:reserve_id",
  async (req, res, next) => {
    try {
      await Cars.updateOne(
        {
          _id: req.params.car_id,
          "rental_records.reservation_id": req.params.reserve_id,
        },
        {
          $unset: { "rental_records.$": 12 },
        }
      );
      res.json({ status: "ok", data: "the car detail is deleted" });
    } catch (error) {}
  }
);

route.post("/signup", async (req, res, next) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email: email });
  if (user) {
    res.json({ status: "error", data: "email already registered" });
  } else {
    await User.create({ email: email, password: password, role: "user" });
    res.status(201).json({ status: "Ok", data: "succesfully registerd" });
  }
});

route.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({
      status: "error",
      data: "Please provide email or password",
    });
  }
  let user = await User.findOne({ email: email }); // find =[]   findOne = {}
  if (!user || password != user.password) {
    return res.json({
      status: "error",
      data: "Invalid Credential",
    });
  }

  let token = await jwt.sign({ id: user._id }, "ubuntusecret");
  res.status(200).json({ token: token });
});
route.get(
  "/cars",
  protect,
  authorize("user", "admin"),
  async (req, res, next) => {
    let cars = await Cars.find();
    res.status(200).json({ status: true, data: cars });
  }
);

module.exports = route;
