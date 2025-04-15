const express = require("express");
const ClassController = require("../controllers/class.controller")
let router = express.Router();


router.post("/classes", ClassController.createClass).get("/classes", ClassController.getClasss)

module.exports = router