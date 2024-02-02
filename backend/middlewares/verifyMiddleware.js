const jwt = require('jsonwebtoken');
const { getCurrUser } = require('./config');


const verifyReq = (req,res,next)=>{
    try{

        // console.log("user is ------>>>>>>>~~~~~~~~~~~" +req.session.currUser);
        let cookie = req.cookies;



        // let user = req.session.currUser;

        let user = getCurrUser();
        
        
        
        
        
        
        // console.log(user);
        // console.log(cookie);
        if(user===undefined || !cookie.token){
            res.status(200).json({
                status:'fail',
                message:`Login first to access data ---> token is ${user}`
            })
            // res.redirect("http://localhost:3000/signin");
            // console.log("CONGRATS YOUR USER IS UNDEFINED");
        }
        else{
            let checkUser = jwt.verify(cookie.token,process.env.JWT_SECRET);
            console.log("i am in the else statement and this is the data --->"+process.env.JWT_SECRET+" --> "+cookie.token);
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