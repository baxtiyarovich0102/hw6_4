require("dotenv").config();
const StudentRouter = require("./routes/student.route")
const CourseRoute = require("./routes/course.route")
const ClassRouter = require("./routes/class.route")
const BookRouter = require("./routes/book.route")
const AuthorRouter = require("./routes/author.route")
const express = require("express")

let app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(StudentRouter)
app.use(CourseRoute)
app.use(ClassRouter)
app.use(BookRouter)
app.use(AuthorRouter)




app.listen(process.env.PORT, () => {
  console.log("Server is running on", process.env.PORT);
});
