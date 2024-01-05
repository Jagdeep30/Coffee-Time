const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    
    storeName:{
        type:String,
        trim:true,
        required:[true,'Store name is required']
    },
    storeImage:{
        type:String,
        // required:true
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


const storeModel = mongoose.model('Store',storeSchema,'store');

module.exports = storeModel;