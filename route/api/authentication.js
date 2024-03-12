const express = require('express')
const router = express.Router();

router.post('/registration', (req,res)=>{
    res.send('okay cool')
})


module.exports = router;