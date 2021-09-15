const express = require('express');
const OfficeController = require('../controllers/office.controller');
const router = express.Router();

router.get('/',OfficeController.findAll);
router.get('/:officeId/availability',OfficeController.checkAvailability)


module.exports = router;
