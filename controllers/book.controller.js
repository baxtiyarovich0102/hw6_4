const Book = require("../models/book.model");



let getAllBooks = async (req, res, next) => {
  try {
    let books = await Book.find();

    if (!books.rows.length) throw new Error("Kitoblar mavjud emas");

    res.status(200).json({ status: "success", books: books.rows });
  } catch (error) {
    res.status(404).json({ status: "failed", message: error.message });
  }
};




let createBook = async (req, res, next) => {
  try {
    let body = req.body;
    let book = await Book.create(body);

    res.status(201).json({ status: "success", book: book.rows });
  } catch (error) {
    res.status(404).json({ status: "failed", message: error.message });
  }
};



let updateBookById = async (req, res, next) => {
  try {
    let { id } = req.params;
    let body = req.body;

    let book = await Book.updateById(id, body);

    if (!book.rows.length) throw new Error("Kitob topilmadi");

    res.status(200).json({ status: "success", book: book.rows });
  } catch (error) {
    res.status(404).json({ status: "failed", message: error.message });
  }
};



let deleteBookById = async (req, res, next) => {
  try {
    let { id } = req.params;
    let book = await Book.deleteById(id);

    if (!book.rows.length) throw new Error("Kitob topilmadi");

    res.status(200).json({ status: "success", message: "O'chirildi", book: book.rows });
  } catch (error) {
    res.status(404).json({ status: "failed", message: error.message });
  }
};

module.exports = {
  getAllBooks,
  createBook,
  updateBookById,
  deleteBookById,
};
