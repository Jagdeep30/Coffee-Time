const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Product Name is required']
    },
    unitPrice:{
        type:Number,
        required:[true,'Price of product is required'],
        default:0
    },
    productImage:{
        type:String,
        // required:true,
    },
    description:{
        type:String
    }
});


const productModel = mongoose.model('Product',productSchema,'product');

module.exports = productModel;