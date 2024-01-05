const mongoose = require('mongoose');

const voucherRedSchema = new mongoose.Schema({
    voucherID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Voucher',
        required:true
    },
    orderID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Voucher',
        required:true
    },
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Voucher',
        required:true
    },
    redemptionDate:{
        type:Date,
        required:true,
        default:Date.now
    }
});


const voucherRedModel = mongoose.model('VoucherRedemption',voucherRedSchema,'voucherRedemption');

module.exports = voucherRedModel;