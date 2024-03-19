const express = require('express');
const becomMarchant = require('../../controller/marchantController');
const router = express.Router();

router.post('/becommarchant', becomMarchant)

module.exports = router;