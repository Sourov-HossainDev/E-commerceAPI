const express = require("express")
const router = express.Router();
const authRouter = require('./authentication')

const authapiRoute = process.env.BASE_AUTH_URL
router.use(authapiRoute, authRouter);


module.exports = router;