const authorModel = require('../models/author.model');

let getAuthorBooks = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await authorModel.findByAuthor(id);
    res.json(data.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {getAuthorBooks}
