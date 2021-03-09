const batchModel = require("../models/batch.js");

const batchController = {};

batchController.list = (req, res) => {
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
}


batchController.create = (req, res) => {
    let {body:{ Number, Size, Color, Quantity }} = req;
    let batch = new batchModel({Number, Size, Color, Quantity});
    batch.save().then(result=>{
        console.log(result);
        res.json("saved Successfully");
    }).catch(error=>{
        console.log(error);
        res.json(error);
    })
}

module.exports = batchController;