const express = require("express");
const router = express.Router();

const batchModel = require("../models/batch.js");


router.get("/", (req,res)=>{
    batchModel.find().then((result)=>{
        if(result.length > 0){
            res.json(result);
        }else{
            res.json("No batches.");
        }
    }).catch(error =>{
        console.log(error);
        res.json(error);
    });
});


router.post("/", (req, res)=>{
    let {body:{ Number, Size, Color, Quantity }} = req;
    let batch = new batchModel({Number, Size, Color, Quantity});
    batch.save().then(result=>{
        console.log(result);
        res.json("saved Successfully");
    }).catch(error=>{
        console.log(error);
        res.json(error);
    })
});




module.exports = router;