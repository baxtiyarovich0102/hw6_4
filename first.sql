CREATE TABLE students(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    phone VARCHAR(50)
);

CREATE TABLE courses(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    level INT
);

CREATE TABLE student_courses(
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id), 
    course_id INT REFERENCES courses(id)
);