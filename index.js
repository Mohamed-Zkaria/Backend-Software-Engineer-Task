const express = require("express");
const dotenv = require("dotenv");
const mongoose = require('mongoose');

const batchRouter = require("./routes/batchRoute.js");

dotenv.config();
const app = express();

mongoose.connect(`mongodb://${process.env.SERVER}/garment`, {useNewUrlParser: true, useUnifiedTopology: true}, (error)=>{
    if(error){
        console.log(error)

    } else {
        console.log("connected to database");
    }
});

app.use(express.json());

app.use("/batch", batchRouter);

app.listen(process.env.SERVERPORT, (error)=>{
    if(error){
        console.log(error);
    } else {
        console.log(`Server is listening on port: ${process.env.SERVERPORT}`);
    }
})