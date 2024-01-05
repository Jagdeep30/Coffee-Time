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
exports.getAllCountries = async (req, res) => {
	let result = await countryModel.find().sort({ countryName: 1 });
	res.send(result);
};

exports.getAllStates = async (req, res) => {
	let result = await stateModel.find(req.query).sort({ stateName: 1 });
	res.send(result);
};

exports.getAllCities = async (req, res) => {
	let result = await cityModel.find(req.query).sort({ cityName: 1 });
	res.send(result);
};
exports.getAllProducts = async (req, res) => {
	let result = await productModel.find({},{__v: 0 }).sort({ name: 1 });
	res.send(result);
};
exports.getAllEmployees = async (req, res) => {
	let result = await employeeModel.find({},{__v: 0 }).sort({ empName: 1 });
	res.send(result);
};
exports.getAllItems = async (req, res) => {
	let result = await itemModel.find({},{__v: 0 }).sort({ itemName: 1 });
	res.send(result);
};
exports.getAllItemStocks = async (req, res) => {
	let result = await itemStockModel.find({},{__v: 0 });
	res.send(result);
};
exports.getAllJobs = async (req, res) => {
	let result = await jobModel.find({},{__v: 0 }).sort({ jobName: 1 });
	res.send(result);
};
exports.getAllOrderDetails = async (req, res) => {
	let result = await orderDetailsModel.find({},{__v: 0 });
	res.send(result);
};
exports.getAllOrders = async (req, res) => {
	let result = await ordersModel.find({},{__v: 0 });
	res.send(result);
};
exports.getAllStores = async (req, res) => {
	let result = await storeModel.find({},{__v: 0 }).sort({storeName:1});
	res.send(result);
};
exports.getAllSuppliers = async (req, res) => {
	let result = await supplierModel.find({},{__v: 0 }).sort({supplierName:1});
	res.send(result);
};
exports.getAllUsers = async (req, res) => {
	let result = await userModel.find({},{__v: 0 }).sort({firstName:1});
	res.send(result);
};
exports.getAllVouchers = async (req, res) => {
	let result = await voucherModel.find({},{__v: 0 });
	result = result.map((val)=>{
		let date = new Date(val.expiryDate.toString());
		let exp = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
		
		date = new Date(val.issueDate.toString());
		let iss= `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;

		let newVal = val._doc;
		newVal.expiryDate = exp;
		newVal.issueDate = iss;
		
		console.log(newVal);
		return newVal;
	});
	
	// console.log(result);
	res.send(result);
};
exports.getAllVoucherReds = async (req, res) => {
	let result = await voucherRedModel.find({},{__v: 0 });
	res.send(result);
};




//controllers for fetching a particular document from collection based on _id

exports.getProduct = async(req,res)=>{
	let result = await productModel.findOne({_id:req.query.id});
	res.send(result);
}

exports.getEmployee = async (req, res) => {
	let result = await employeeModel.findOne({_id:req.query.id});
	let date = new Date(result.dateOfLeaving.toString());
	let exp = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
	
	let newVal = result._doc;
	newVal.dateOfLeaving = exp;
	console.log(newVal);
	res.send(newVal);
};
exports.getItem = async (req, res) => {
	let result = await itemModel.findOne({_id:req.query.id});
	res.send(result);
};
exports.getItemStock = async (req, res) => {
	let result = await itemStockModel.findOne({_id:req.query.id});
	res.send(result);
};
exports.getJob = async (req, res) => {
	let result = await jobModel.findOne({_id:req.query.id});
	res.send(result);
};
exports.getOrderDetail = async (req, res) => {
	let result = await orderDetailsModel.findOne({_id:req.query.id});
	res.send(result);
};
exports.getOrder = async (req, res) => {
	let result = await ordersModel.findOne({_id:req.query.id});
	res.send(result);
};
exports.getStore = async (req, res) => {
	let result = await storeModel.findOne({_id:req.query.id});
	res.send(result);
};
exports.getSupplier = async (req, res) => {
	let result = await supplierModel.findOne({_id:req.query.id});
	res.send(result);
};
exports.getUser = async (req, res) => {
	let result = await userModel.findOne({_id:req.query.id});
	res.send(result);
};
exports.getVoucher = async (req, res) => {
	let result = await voucherModel.findOne({_id:req.query.id});
	res.send(result);
};
exports.getVoucherRed = async (req, res) => {
	let result = await voucherRedModel.findOne({_id:req.query.id});
	res.send(result);
};