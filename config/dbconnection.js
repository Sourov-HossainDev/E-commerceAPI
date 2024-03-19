const express = require("express")
const mongoose = require('mongoose');
const dotenv = require('dotenv')


// ORIBI
// OhLyElDj6VOmJKZH
// mongodb+srv://<username>:<password>@cluster0.5vi3a90.mongodb.net/?retryWrites=true&w=majority

function dbConnection(){
    mongoose.connect(process.env.MONGODBURI)
  .then(() => console.log('DataBase Connected Now!'));
}

module.exports = dbConnection;