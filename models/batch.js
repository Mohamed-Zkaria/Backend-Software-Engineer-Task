const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
    Number: {type: "Number",  uniuque: true, min: 1, required: true  },
    Size: {type: "String", enum: ["S", "M", "L", "XL"], required: true},
    Color: {type: "String", enum: ["red", "blue", "black", "green"], required: true},
    Quantity: {type: "Number", min: 1, required: true}
});

const batchModel = mongoose.model("Batch", batchSchema);

module.exports = batchModel;