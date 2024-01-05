const mongoose = require('mongoose');

const voucherSchema = new mongoose.Schema({
    voucherCode:{
        type:String,
        unique:true,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    expiryDate:{
        type:Date,
        required:[true,'Expiry Date is required']
    },
    issueDate:{
        type:Date,
        required:true,
        default:Date.now
    }
});


const voucherModel = mongoose.model('Voucher',voucherSchema,'voucher');

module.exports = voucherModel;