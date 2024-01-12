const jwt = require('jsonwebtoken');

exports.createToken = (data,res,message,statusCode=200)=>{
    const token = jwt.sign({_id:data._id},process.env.JWT_SECRET);

    res.status(statusCode).cookie('token',token,{
        httpOnly:true,
        maxAge:4*60*60*1000,
        // sameSite:none,

    }).json({
        status:'success',
        message,
        data
    });
}