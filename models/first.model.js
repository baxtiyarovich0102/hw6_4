const pool = require("../config/db")



let Model = {
    find: function () {
        return pool.query("SELECT * FROM student_courses s_c JOIN courses c ON s_c.course_id=c.id JOIN students s ON s_c.student_id=s.id");
      },

      createStudent: function (body) {
        return pool.query(
          "insert into students(name, phone) values($1, $2) RETURNING *",
          [body.name, body.phone]
        );
      },

      createCourses: function (body) {
        return pool.query("INSERT INTO courses(title, level) values($1, $2) RETURNING *",
            [body.title, body.level]
        )
      },


      createClass: function (body) {
        return pool.query("INSERT INTO student_courses(student_id, course_id) values($1, $2) RETURNING *",
            [body.student_id, body.course_id]
        )
      }
}

module.exports = Model;
