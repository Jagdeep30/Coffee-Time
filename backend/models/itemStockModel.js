const mongoose = require('mongoose');


const itemStockSchema = new mongoose.Schema({
    rID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Item'
    },
    quantity:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:[true,'Enter total price']
    },
    date:{
        type:Date,
        required:true,
        default:Date.now
    },
    supplierID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Supplier'
    },
    storeID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Store'
    }
});


const itemStockModel = mongoose.model('ItemStock',itemStockSchema,'itemStock');

module.exports = itemStockModel;