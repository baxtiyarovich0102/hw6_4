const Model = require("../models/first.model")



let createClass = async (req, res, next) => {
    try {
      let body = req.body;
  
      let classs = await Model.createClass(body);
  
      res.status(200).json({ status: "succes", classs: classs.rows });
    } catch (error) {
      res.status(404).json({ status: "Failed", message: error.message });
    }
  };


  let getClasss = async (req, res, next) => {
    try {
      let classes = await Model.find();
  
      if (!classes.rows.length) throw new Error("Classlar mabjud emas");
  
      res.status(200).json({ status: "Succes", classes: classes.rows });
    } catch (error) {
      res.status(404).json({ status: "Failed", message: error.message });
    }
  };

  module.exports = {createClass, getClasss}