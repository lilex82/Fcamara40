const express = require('express');
const OfficeController = require('../controllers/office.controller');
const router = express.Router();

console.log ('ola OfficeController')
router.get('/',OfficeController.findAll);


module.exports = router;
