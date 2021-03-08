const express = require("express");
const PORT = 5000;
const app = express();


app.listen(PORT, (error)=>{
    if(error){
        console.log(error);
    } else {
        console.log(`Server is listening on port: ${PORT}`);
    }
})