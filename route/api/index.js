const express = require("express")
const router = express.Router();
const authRouter = require('./authentication')
const catagoryRouter = require('./catagory')
const marchantRouter = require('./marchant')

const authapiRoute = process.env.BASE_AUTH_URL
router.use(authapiRoute, authRouter);
router.use('/catagory', catagoryRouter )
router.use('/marchant', marchantRouter )


module.exports = router;