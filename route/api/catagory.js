const express = require('express');
const {createCatagoryController, catagoryStatusController, createSubCatagoryController} = require('../../controller/catagoryController');
const router = express.Router();

router.post('/createCatagory', createCatagoryController);
router.post('/statusCatagory', catagoryStatusController);
router.post('/createSubCatagory', createSubCatagoryController)

module.exports = router;