const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');

router.get('/books', bookController.getAllBooks);
router.post('/books', bookController.createBook);
router.put('/books/:id', bookController.updateBookById);
router.delete('/books/:id', bookController.deleteBookById);

module.exports = router;
