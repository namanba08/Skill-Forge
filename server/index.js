const express = require('express')
const mongoose = require("mongoose")
const app = express();
require("dotenv").config();

exports.connect = () =>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("DB connected "))
    .catch((error) => {
        console.log("Error connecting DB");
        console.error(error);
    })
}