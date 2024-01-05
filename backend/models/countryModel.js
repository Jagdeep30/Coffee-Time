const mongoose = require('mongoose');


const countrySchema = new mongoose.Schema({
    countryName:{
        type: String,
        required:[true,'Country Name is required'],
        unique:true
    }
});


const countryModel = mongoose.model('Country',countrySchema,'country');

module.exports = countryModel;