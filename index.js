const express = require('express');
const dbConnection = require('./config/dbconnection');
const app = express();
require('dotenv').config();
const route  = require('./route');

app.use(express.json())
dbConnection()

app.use(route)

app.listen(3000)