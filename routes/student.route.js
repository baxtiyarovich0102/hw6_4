const express = require("express");
const StudentController = require("../controllers/student.controller")
let router = express.Router();


router.post("/students", StudentController.createStudent)

module.exports = router