const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
    rName:{
        type:String,
        required:[true,'Item name is required']
    }
});

const itemModel = mongoose.model('Item',itemSchema,'item');

module.exports = itemModel;