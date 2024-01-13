const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    date:{
        type:Date,
        required:true,
        default:Date.now
    },
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    // paymentMode:{
    //     type:String,
    //     required:true,
    //     enum:['online','cash']
    // },
    // empID:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'Employee',
    //     required:true
    // },
    voucherID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Voucher'
    }
});


const ordersModel = mongoose.model('Orders',ordersSchema,'orders');

module.exports = ordersModel;