const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
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
        type:String,
        trim:true
    },
    jobID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Job'
    },
    storeID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Store'
    },
    gender:{
        type:String,
        required:true,
        enum:['male','female']
    },
    dateOfBirth:{
        type:Date,
        required:true
    }
    ,
    dateOfJoining:{
        type:Date,
        required:true
    },
    dateOfLeaving:{
        type:Date,
        validate:{
            validator:function(dol){
                if(dol===null)return true;
                return dol>this.dateOfJoining;
            },
            message:"Date of leaving cannot be before date of joining"
        }
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
});


const empModel = mongoose.model('Employee',empSchema,'employee');

module.exports = empModel;