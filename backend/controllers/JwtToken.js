const jwt = require('jsonwebtoken');

exports.createToken = (data,res,message,statusCode=200)=>{
    const token = jwt.sign({_id:data._id},process.env.JWT_SECRET);

    

    res.status(statusCode).cookie('token',token,{
        httpOnly:true,
        maxAge:10*60*60*1000,
        sameSite:'none',
        secure:true
    }).json({
        status:'success',
        message,
        data
    });
}