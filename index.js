const express = require('express')
const dbConnection = require('./config/dbconnection')
const app = express()
require('dotenv').config()
const userList = require('./models/userSchema')
const route  = require('./route')

app.use(express.json())

dbConnection()
app.use(route)

// app.post('/registration', (req,res)=>{
//     const {fristname, lastname, email, telephone, address, city, postcode, division, district, password} = req.body;
//     console.log(req.body);
//     const users = new userList({
//         fristname,
//         lastname,
//         email,
//         telephone,
//         address,
//         city,
//         postcode,
//         division,
//         district,
//         password

//     })
//     users.save();


// })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000)