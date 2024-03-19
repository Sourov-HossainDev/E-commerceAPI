const express = require('express');
const {createCatagoryController, catagoryStatusController, createSubCatagoryController, subCatagoryStatusController} = require('../../controller/catagoryController');
const router = express.Router();

router.post('/createCatagory', createCatagoryController);
router.post('/statusCatagory', catagoryStatusController);
router.post('/createSubCatagory', createSubCatagoryController)
router.post('/statusSubCatagory', subCatagoryStatusController)

module.exports = router;