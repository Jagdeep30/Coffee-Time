const mongoose = require('mongoose');

const orderDetailSchema = new mongoose.Schema({
    quantity:{
        type:Number,
        required:true
    },
    orderID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Orders'
    },
    productID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }
});


const orderDetailModel = mongoose.model('OrderDetails',orderDetailSchema,'orderDetails');

module.exports = orderDetailModel;