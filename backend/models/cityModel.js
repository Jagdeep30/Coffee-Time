const mongoose = require('mongoose');


const citySchema = new mongoose.Schema({
    cityName:{
        type:String,
        required:[true,'City is required']
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


const cityModel = mongoose.model('City',citySchema,'city');

module.exports = cityModel;