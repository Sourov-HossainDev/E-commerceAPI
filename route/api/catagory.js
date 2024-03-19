const express = require('express');
const {createCatagoryController, catagoryStatusController, createSubCatagoryController, subCatagoryStatusController, getAllCatagory, getAllSubCatagory} = require('../../controller/catagoryController');
const { get } = require('mongoose');
const router = express.Router();

router.post('/createCatagory', createCatagoryController);
router.post('/statusCatagory', catagoryStatusController);
router.post('/createSubCatagory', createSubCatagoryController)
router.post('/statusSubCatagory', subCatagoryStatusController)

router.get('/getallCatagory', getAllCatagory)
router.get('/getallsubcatagory', getAllSubCatagory)

module.exports = router;