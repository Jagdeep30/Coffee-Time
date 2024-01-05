const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
    jobName:{
        type:String,
        required:[true,'Job name is required'],
        unique:true
    },
    salary:{
        type:Number,
        required:[true,'Salary is required for job']
    }
});


const jobModel = mongoose.model('Job',jobSchema,'job');

module.exports = jobModel;