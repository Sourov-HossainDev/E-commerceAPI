const express = require('express');
const {seceureProduct, createProduct}= require('../../controller/productController');
const router = express.Router();

router.post('/createproduct', seceureProduct, createProduct)


module.exports = router;