const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,'First name is required'],
        trim:true
    },
    lastName:{
        type:String,
        required:[true,'Last name is required'],
        trim:true
    },
    phone:{
        type:String,
        required:[true,'Phone number is required'],
        unique:[true,'Mobile number already in use']
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:[true,'Email already in use'],
        lowercase:true,
        trim:true
    },
    address1:{
        type:String,
        required:[true,'Address is required'],
        trim:true
    },
    address2:{
        type:String
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
    },
    pincode:{
        type:String,
        requried:[true,'Area Code is required']
    },
    password:{
        type:String,
        trim:true,
        minLength:8,
        select:false
    },
    passwordConfirm:{
        type:String,
        trim:true,
        validate:{
            validator:function(pass){
                return pass===this.password;
            },
            message:'Password did not match'
        }
    }
});


const userModel = mongoose.model('User',userSchema,'user');

module.exports = userModel;