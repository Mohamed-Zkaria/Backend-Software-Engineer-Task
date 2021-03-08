const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const mongoose = require('mongoose');
mongoose.connect(`mongodb://${process.env.SERVER}/garment`, {useNewUrlParser: true, useUnifiedTopology: true}, (error)=>{
    if(error){
        console.log(error)

    } else {
        console.log("connected to database");
    }
});


app.listen(process.env.SERVERPORT, (error)=>{
    if(error){
        console.log(error);
    } else {
        console.log(`Server is listening on port: ${process.env.SERVERPORT}`);
    }
})