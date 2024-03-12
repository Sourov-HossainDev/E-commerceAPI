const express = require("express")
const app = express()

function authentication(){
    app.get('/registration', (req,res)=>{
        res.send('ok')
    })
}

module.exports = authentication;