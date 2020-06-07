const Course = require("../model/course");

exports.getcourses = async (req, res, next) => {
  try {
    let courselist = await Course.find({});
    res.json({ success: true, data: courselist });
  } catch (error) {
    res.json({ success: false });
  }
};

exports.addCourse = async (req, res, next) => {
  try {
    await Course.create({
      name: req.body.name,
      code: req.body.code,
      topics: req.body.topics,
    });
    res.status(201).json({ success: true, data: "succesfully posted" });
  } catch (err) {
    res.json({ success: false, data: "Unable to post" });
  }

  // Course.create({
  //   name: req.body.name,
  //   code: req.body.code,
  //   topics: req.body.topics,
  // })
  //   .then(() => {
  //     res.status(201).json({ success: true, data: "succesfully posted" });
  //   })
  //   .catch((error) => {
  //     res.json({ success: false, data: "Unable to post" });
  //   });
};

exports.editCourse = async (req, res, next) => {
  try {
    await Course.updateOne({ _id: req.body.id }, { $set: { ...req.body } });
    res.json({ success: true, data: "succesfully updated" });
  } catch (error) {
    res.json({ success: false, data: "not able to update" });
  }
};

exports.deleteCourse = async (req, res, next) => {
  try {
    await Course.deleteOne({ _id: req.params.id });
    res.json({ success: true, data: "succefully deleted" });
  } catch (error) {
    res.json({ success: false });
  }
};
