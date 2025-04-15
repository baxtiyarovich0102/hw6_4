const pool = require('../config/db');



let Author = {findByAuthor: function (authorId) {
    return pool.query(
      `SELECT b.id, b.title, b.published_year
       FROM books b
       WHERE b.author_id = $1`,
      [authorId]
    );
  }
}

module.exports = Author