const express = require('express');

const dbcon = require('../dbconnect.js');

const router = express.Router();

router.route('/').get((req,res)=>{
    let q = dbcon.query('SELECT * FROM CUSTOMER',(err,result)=>{
        if(err)throw err;
        else console.log(result);
    });
    res.json({
        status:200,
    })
});

module.exports = router;