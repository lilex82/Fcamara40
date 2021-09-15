const express = require('express');
const BookController = require('../controllers/book.controller');
const router = express.Router();

router.post('/',BookController.create);

module.exports = router;