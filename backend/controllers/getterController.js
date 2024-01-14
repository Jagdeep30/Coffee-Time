const countryModel = require("../models/countryModel.js");
const stateModel = require("../models/stateModel.js");
const cityModel = require("../models/cityModel.js");
const productModel = require("../models/productModel.js");
const employeeModel = require("../models/employeeModel.js");
const itemModel = require("../models/itemModel.js");
const itemStockModel = require("../models/itemStockModel.js");
const jobModel = require("../models/jobModel.js");
const orderDetailsModel = require("../models/orderDetailsModel.js");
const ordersModel = require("../models/ordersModel.js");
const storeModel = require("../models/storeModel.js");
const supplierModel = require("../models/supplierModel.js");
const userModel = require("../models/userModel.js");
const voucherModel = require("../models/voucherModel.js");
const voucherRedModel = require("../models/voucherRedModel.js");


//controllers for fetching all the data from collection
exports.getAllCountries = async (req, res,next) => {
	try{
		let result = await countryModel.find().sort({ countryName: 1 });
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
};

exports.getAllStates = async (req, res,next) => {
	try{
		let result = await stateModel.find({countryID:req.params.id}).sort({ stateName: 1 });
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
};

exports.getAllCities = async (req, res,next) => {
	try{
		let result = await cityModel.find({stateID:req.params.id}).sort({ cityName: 1 });
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
};
exports.getAllProducts = async (req, res,next) => {
	try{
		let result = await productModel.find({},{__v: 0 }).sort({ name: 1 });
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
};
exports.getAllEmployees = async (req, res,next) => {
	try{
		let result = await employeeModel.find({},{__v: 0 }).sort({ empName: 1 });
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
};
exports.getAllItems = async (req, res,next) => {
	try{
		let result = await itemModel.find({},{__v: 0 }).sort({ itemName: 1 });
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
};
exports.getAllItemStocks = async (req, res,next) => {
	try{
		let result = await itemStockModel.find({},{__v: 0 });
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
};
exports.getAllJobs = async (req, res,next) => {
	try{
		let result = await jobModel.find({},{__v: 0 }).sort({ jobName: 1 });
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
};
exports.getAllOrderDetails = async (req, res,next) => {
	try{
		let result = await orderDetailsModel.find({},{__v: 0 });
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
};
exports.getAllOrders = async (req, res,next) => {
	try{
		let result = await ordersModel.find({},{__v: 0 });
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
};
exports.getAllStores = async (req, res,next) => {
	try{
		let result = await storeModel.find({},{__v: 0 }).sort({storeName:1});
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
};
exports.getAllSuppliers = async (req, res,next) => {
	try{
		let result = await supplierModel.find({},{__v: 0 }).sort({supplierName:1});
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
};
exports.getAllUsers = async (req, res,next) => {
	try{
		let result = await userModel.find({},{__v: 0 }).sort({firstName:1});
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
};
exports.getAllVouchers = async (req, res,next) => {
	try{
		let result = await voucherModel.find({},{__v: 0 });
		result = result.map((val)=>{
			let date = new Date(val.expiryDate.toString());
			let exp = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
			
			date = new Date(val.issueDate.toString());
			let iss= `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
	
			let newVal = val._doc;
			newVal.expiryDate = exp;
			newVal.issueDate = iss;
			
			// console.log(newVal);
			return newVal;
		});
		
		// console.log(result);
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
};
exports.getAllVoucherReds = async (req, res,next) => {
	try{
		let result = await voucherRedModel.find({},{__v: 0 });
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
};




//controllers for fetching a particular document from collection based on _id

exports.getProduct = async(req,res,next)=>{
	try{
		let result = await productModel.findOne({_id:req.params.id});
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
}

exports.getEmployee = async (req, res,next) => {
	try{
		let data = await employeeModel.findOne({_id:req.params.id});
		let date = new Date(data.dateOfLeaving);
		let exp = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
		
		let result = data._doc;
		result.dateOfLeaving = exp;
		// console.log(result);
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
};
exports.getItem = async (req, res,next) => {
	try{
		let result = await itemModel.findOne({_id:req.params.id});
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
};
exports.getItemStock = async (req, res,next) => {
	try{
		let result = await itemStockModel.findOne({_id:req.params.id});
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
};
exports.getJob = async (req, res,next) => {
	try{
		let result = await jobModel.findOne({_id:req.params.id});
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
};
exports.getOrderDetail = async (req, res,next) => {
	try{
		let result = await orderDetailsModel.findOne({_id:req.params.id});
		res.status(200).json({
			status:'success',
			data:result
		});


	}catch(err){
		next(err);
	}
};
exports.getOrder = async (req, res,next) => {
	try{
		let result = await ordersModel.findOne({_id:req.params.id});
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
};
exports.getStore = async (req,res,next) => {
	try{
		let result = await storeModel.findOne({"_id":req.params.id});
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
};
exports.getSupplier = async (req, res,next) => {
	try{
		let result = await supplierModel.findOne({_id:req.params.id});
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
};

exports.getVoucher = async (req, res,next) => {
	try{
		let result = await voucherModel.findOne({_id:req.params.id});
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
};
exports.getVoucherFromCode = async(req,res,next)=>{
	try{
		let result = await voucherModel.findOne({"voucherCode":req.params.code});
		if(!result){
			res.status(200).json({
				status:'fail',
				message:"Not Found"
			})
		}
		else{
			res.status(200).json({
				status:'success',
				data:result
			})
		}
	}catch(err){
		next(err);
	}
}
exports.getVoucherRed = async (req, res,next) => {
	try{
		let result = await voucherRedModel.findOne({_id:req.params.id});
		res.status(200).json({
			status:'success',
			data:result
		});

	}catch(err){
		next(err);
	}
};
exports.getState = async(req,res,next) => {
	try{
		let result = await stateModel.findOne({'_id':req.params.id});
		res.status(200).json({
			status:'success',
			data:result
		});
	}catch(err){
		next(err);
	}
};
exports.getCity = async(req,res,next) => {
	try{
		let result = await cityModel.findOne({'_id':req.params.id});
		res.status(200).json({
			status:'success',
			data:result
		});
	}catch(err){
		next(err);
	}
};
exports.getCountry = async(req,res,next) => {
	try{
		let result = await countryModel.findOne({'_id':req.params.id});
		res.status(200).json({
			status:'success',
			data:result
		});
	}catch(err){
		next(err);
	}
};