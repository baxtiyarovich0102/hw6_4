const express = require('express');
const router = express.Router();
const authorController = require('../controllers/author.controller');

router.get('/authors/:id/books', authorController.getAuthorBooks);

module.exports = router;
