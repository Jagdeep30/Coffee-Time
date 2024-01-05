const mongoose = require('mongoose');



const supplierSchema = new mongoose.Schema({
    supplierName:{
        type:String,
        required:[true,'Supplier Name is required'],
    },
    address:{
        type:String,
        required:[true,'Address is required']
    },
    pincode:{
        type:String,
        requried:[true,'Area Code is required']
    },
    phone:{
        type:String,
        required:[true,'Phone number is required'],
        unique:[true,'Mobile number already in use']
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:[true,'Email already in use']
    },
    cityID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'City'
    },
    stateID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'State'
    },
    countryID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Country'
    }
});


const supplierModel = mongoose.model('Supplier',supplierSchema,'supplier');

module.exports = supplierModel;