const jwt = require('jsonwebtoken');


const verifyReq = (req,res,next)=>{
    try{

    
        let cookie = req.cookies;
        let user = req.session.currUser;
        console.log(user);
        console.log(cookie);
        if(user===undefined || !cookie.token){
            res.status(200).json({
                status:'fail',
                message:'Login first to access data'
            })
            // res.redirect("http://localhost:3000/signin");
            // console.log("CONGRATS YOUR USER IS UNDEFINED");
        }
        else{
            let checkUser = jwt.verify(cookie.token,process.env.JWT_SECRET);
            if(checkUser._id === user._id){
                next();
            }
            else{
                res.status(200).json({
                    status:'fail',
                    message:"login first to continue"
                })
            }
        }

    }catch(err){
        next(err);
    }





}

module.exports = verifyReq;