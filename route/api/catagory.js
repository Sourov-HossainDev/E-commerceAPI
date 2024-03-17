const express = require('express');
const {createCatagoryController, catagoryStatusController} = require('../../controller/catagoryController');
const router = express.Router();

router.post('/createCatagory', createCatagoryController);
router.post('/statusCatagory', catagoryStatusController)

module.exports = router;