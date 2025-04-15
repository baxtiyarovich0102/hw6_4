const pool = require("../config/db");


let Book = {

  find: function () {
    return pool.query(`
      SELECT b.id, b.title, b.published_year, a.name AS author_name
      FROM books b
      JOIN authors a ON b.author_id = a.id
    `);
  },




  create: function (body) {
    return pool.query(
      "INSERT INTO books (title, author_id, published_year) VALUES ($1, $2, $3) RETURNING *",
      [body.title, body.author_id, body.published_year]
    );
  },



  updateById: function (id, body) {
    return pool.query(
      "UPDATE books SET title=$1, published_year=$2 WHERE id=$3 RETURNING *",
      [body.title, body.published_year, id]
    );
  },


  
  deleteById: function (id) {
    return pool.query("DELETE FROM books WHERE id=$1 RETURNING *", [id]);
  },
};

module.exports = Book;
