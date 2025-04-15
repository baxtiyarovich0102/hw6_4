const Model = require("../models/first.model")



let createCourse = async (req, res, next) => {
    try {
      let body = req.body;
  
      let course = await Model.createCourses(body);
  
      res.status(200).json({ status: "succes", course: course.rows });
    } catch (error) {
      res.status(404).json({ status: "Failed", message: error.message });
    }
  };

  module.exports = {createCourse}