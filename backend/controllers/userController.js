const bcrypt = require('bcrypt');
const userModel = require('../models/userModel.js');
const { createToken } = require('./JwtToken.js');


exports.addUser = async(req,res,next)=>{
    try{
        let data = req.body;
        let pass = await bcrypt.hash(data.password,parseInt(process.env.BCRYPT_ROUNDS));
        data.password = pass;
        let result = await userModel.create(data);

        req.session.currUser = result;
        // console.log(req.session.currUser);

        createToken(result,res,'User created Successfully',200);
        // res.status(200).json({
        //     status:'success',
        //     data:result
        // }).redirect('http://localhost:3000/dashboard');

    }
    catch(err){
        next(err);
    }
};

exports.login = async(req,res,next)=>{
    try{
        let {email,password} = req.body;
        // console.log(req);

        let user = await userModel.findOne({email}).select("+password");
        if(!user)next(new Error('Invalid Credentials'));

        // console.log(user);
        let passMatch = await bcrypt.compare(password,user.password);
        if(!passMatch) next(new Error("Invalid Credentials"));

        // req.session.currUser = user;
        req.session.currUser = user;
        console.log(req.session.currUser);

        createToken(user,res,"Login Successful",200);
    }catch(err){
        next(err);
    }
}

exports.getUser = async (req, res,next) => {
	try{
		let result = await userModel.findOne({_id:req.params.id});
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
};

exports.getUsers = async(req,res,next)=>{
    try{
        let result = await userModel.find();
        res.status(200).json({
            status:'success',
            data:result
        })
    }catch(err){
        next(err);
    }
}

exports.updateUser = async(req,res,next)=>{
    try{
        let result = await userModel.findByIdAndUpdate({_id:req.params.id},req.body);
        res.status(200).json({
            status:'success',
            message:"User Updated Successfully"
        })
    }catch(err){
        next(err);
    }
}

exports.deleteUser = async(req,res,next)=>{
    try{
        await userModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:'success',
            message:"User deleted successfully"
        })
    }catch(err){
        next(err);
    }
}