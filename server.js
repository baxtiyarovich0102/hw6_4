require("dotenv").config();
const StudentRouter = require("./routes/student.route")
const CourseRoute = require("./routes/course.route")
const ClassRouter = require("./routes/class.route")
const express = require("express")

let app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(StudentRouter)
app.use(CourseRoute)
app.use(ClassRouter)




app.listen(process.env.PORT, () => {
  console.log("Server is running on", process.env.PORT);
});
