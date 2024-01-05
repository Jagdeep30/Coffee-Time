const mongoose = require('mongoose');


const stateSchema = new mongoose.Schema({
    stateName:{
        type:String,
        required:[true,'State is required']
    },
    countryID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Country'
    }
});

const stateModel = mongoose.model('State',stateSchema,'state');

module.exports = stateModel;