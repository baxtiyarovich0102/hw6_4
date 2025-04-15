const Model = require("../models/first.model")



let createStudent = async (req, res, next) => {
    try {
      let body = req.body;
  
      let student = await Model.createStudent(body);
  
      res.status(200).json({ status: "succes", student: student.rows });
    } catch (error) {
      res.status(404).json({ status: "Failed", message: error.message });
    }
  };

  module.exports = {createStudent}