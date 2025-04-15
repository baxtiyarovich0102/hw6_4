const express = require("express");
const CourseController = require("../controllers/course.controller")
let router = express.Router();


router.post("/courses", CourseController.createCourse)

module.exports = router