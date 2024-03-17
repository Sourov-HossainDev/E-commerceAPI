const express = require('express');
const createCatagoryController = require('../../controller/createCatagoryController');
const router = express.Router();

router.post('/createCatagory', createCatagoryController)

module.exports = router;