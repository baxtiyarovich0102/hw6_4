CREATE TABLE authors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  bio TEXT
);

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  author_id INTEGER REFERENCES authors(id),
  published_year INTEGER
);
