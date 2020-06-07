const router = require("express").Router();

const courseController = require("../controller/course");

router.get("/courselist", courseController.getcourses);
router.post("/addcourse", courseController.addCourse);
router.patch("/editcourse", courseController.editCourse);
router.delete("/deleteCourse/:id", courseController.deleteCourse);

module.exports = router;
