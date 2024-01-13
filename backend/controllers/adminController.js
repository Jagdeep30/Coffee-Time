const dbconn = require("../dbconnect.js");
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


// exports.addvoucher = async (req, res) => {
// 	let data = { ...req.body };
// 	data.amount = parseInt(data.amount);
// 	let query =
// 		"insert into voucher(voucherCode,amount,expiryDate,issueDate) values(?,?,?,?)";
// 	dbconn.query(
// 		query,
// 		[data.voucherCode, data.amount, data.expiryDate, data.issueDate],
// 		(err) => {
// 			if (err) throw err;
// 		}
// 	);

// 	query = "select * from voucher";
// 	let response = await dbconn.promise().query(query);
// 	res.send(response[0]);
// };

// exports.addemp = async (req, res) => {
// 	let data = { ...req.body };
// 	let query = `insert into employee(firstName,phone,address1,jobID,storeID,dateOfBirth,dateOfJoining,postalCode,gender,lastName,email,cityID,stateID,countryID${
// 		data.dateOfLeaving ? ",dateOfLeaving" : ""
// 	}${data.address2 ? ",address2" : ""}) values(${
// 		data.dateOfLeaving ? "?," : ""
// 	}${data.address2 ? "?," : ""},?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

// 	let values = [
// 		data.firstName,
// 		data.phone,
// 		data.address1,
// 		data.address2,
// 		parseINt(data.jobID),
// 		parseInt(data.storeID),
// 		data.dateOfBirth,
// 		data.dateOfJoining,
// 		data.postalCode,
// 		data.gender,
// 		data.lastName,
// 		data.email,
// 		parseInt(data.cityID),
// 		parseInt(data.stateID),
// 		parseInt(data.countryID),
// 	];

// 	if (data.dateOfLeaving) values.push(data.dateOfLeaving);

// 	dbconn.query(query, values, (err) => {
// 		if (err) throw err;
// 	});

// 	query = "select * from voucher";
// 	let response = await dbconn.promise().query(query);
// 	res.send(response[0]);
// };





// MONGO DB

//controllers for adding document in a controller


exports.addvoucher = async (req, res, next) => {
	try{
	let data = { ...req.body };
	data.amount = parseInt(data.amount);

	await voucherModel.create(data);
	// console.log(response);
	res.status(200).json({
		status:'success',
		message:"Added Successfully"
	})
	// res.redirect('http://localhost:3000/admin/voucherForm');
	}
	catch(err){
		next(err);
	}
};
exports.addVoucherRed = async(req,res,next)=>{
	try{
		await voucherRedModel.create(req.body);
		res.status(200).json({
			status:'success',
			message:'Added successfully'
		})
	}catch(err){
		next(err)
	}
}

exports.addEmp = async (req,res, next)=>{
	try{
	let data = { ...req.body };
	console.log(data);
	await employeeModel.create(data);
	res.status(200).json({
		status:'success',
		message:"Added Successfully"
	})
	// res.redirect('http://localhost:3000/admin/employeeForm');

	}
	catch(err){
		next(err);
	}
}

exports.addjob = async (req,res,next)=>{
	try{
		let data = {...req.body};
		await jobModel.create(data);
		res.status(200).json({
			status:'success',
			message:"Added Successfully"
		})
		// res.redirect('http://localhost:3000/admin/jobForm');

	}catch(err){
		next(err);
	}
}
exports.addproduct = async (req,res,next)=>{
	try{
		let data = {...req.body};
		let result = await productModel.create(data);
		res.status(200).json({
			status:'success',
			data:result
		})
	// res.redirect('http://localhost:3000/admin/productForm');}
	}
	catch(err){
		next(err);
	}
}
exports.additem = async (req,res,next)=>{
	try{
		let data = {...req.body};
		await itemModel.create(data);
		res.status(200).json({
			status:'success',
			message:"Added Successfully"
			// res.redirect('http://localhost:3000/admin/itemForm');}
		})
	}
	catch(err){
		next(err);
	}
}
exports.additemstock = async (req,res,next)=>{
	try{
		let data = {...req.body};
		await itemStockModel.create(data);
		res.status(200).json({
			status:'success',
			message:"Added Successfully"
		})
		// res.redirect('http://localhost:3000/admin/itemStockForm');

	}catch(err){
		next(err);
	}
}
exports.addstore = async (req,res,next)=>{
	try{

		let data = {...req.body};
		let result = await storeModel.create(data);
		res.status(200).json({
			status:'success',
			data:result
		})
		// res.redirect('http://localhost:3000/admin/storeForm');
	}catch(err){
		next(err);
	}
}
exports.addsupplier = async (req,res,next)=>{
	try{

		let data = {...req.body};
		await supplierModel.create(data);
		res.status(200).json({
			status:'success',
			message:"Added Successfully"
		})
		// res.redirect('http://localhost:3000/admin/supplierForm');
	}catch(err){
		next(err);
	}
}
exports.addOrder = async(req,res,next)=>{
	try{
		let data = req.body;
		let result = await ordersModel.create(req.body);
		res.status(200).json({
			status:'success',
			data:result
		})
	}catch(err){
		next(err);
	}
}
exports.addOrderDetails = async(req,res,next)=>{
	try{
		let result = await orderDetailsModel.create(req.body);
		res.status(200).json({
			status:'success',
			data:result
		})
	}catch(err){
		next(err);
	}
}


//controllers for updating the value in a document based on its _id
exports.updateProduct = async(req,res,next)=>{
	try{
		await productModel.findByIdAndUpdate(req.query.id,req.body);
		res.status(200).json({
			status:'success',
			message:"Updated Successfully"
		})
		// res.redirect('http://localhost:3000/admin/productForm');

	}catch(err){
		next(err);
	}
}
exports.updateEmployee = async(req,res,next)=>{
	try{
		await employeeModel.findByIdAndUpdate(req.params.id,req.body);
		res.status(200).json({
			status:'success',
			message:"Updated Successfully"
		})

	}catch(err){
		next(err);
	}
}
exports.updateJob = async(req,res,next)=>{
	try{
		await jobModel.findByIdAndUpdate(req.query.id,req.body);
		res.status(200).json({
			status:'success',
			message:"Updated Successfully"
		})
		// res.redirect('http://localhost:3000/admin/jobForm');

	}catch(err){
		next(err);
	}
}
exports.updateItem = async(req,res,next)=>{
	try{
		await itemModel.findByIdAndUpdate(req.query.id,req.body);
		res.status(200).json({
			status:'success',
			message:"Updated Successfully"
		})
		// res.redirect('http://localhost:3000/admin/itemForm');

	}catch(err){
		next(err);
	}
}
exports.updateItemStock = async(req,res,next)=>{
	try{

		await itemstockModel.findByIdAndUpdate(req.query.id,req.body);
		res.status(200).json({
			status:'success',
			message:"Updated Successfully"
		})
		// res.redirect('http://localhost:3000/admin/itemstockForm');
	}catch(err){
		next(err);
	}
}
exports.updateStore = async(req,res,next)=>{
	try{
		res.status(200).json({
			status:'success',
			message:"Updated Successfully"
		})
		await storeModel.findByIdAndUpdate(req.query.id,req.body);
		// res.redirect('http://localhost:3000/admin/storeForm');

	}catch(err){
		next(err);
	}
}
exports.updateSupplier = async(req,res,next)=>{
	try{
		await supplierModel.findByIdAndUpdate(req.query.id,req.body);
		res.status(200).json({
			status:'success',
			message:"Updated Successfully"
		})
		// res.redirect('http://localhost:3000/admin/supplierForm');

	}catch(err){
		next(err);
	}
}


// delete controllers

exports.deleteProduct = async(req,res,next)=>{
	try{
		await productModel.findByIdAndDelete(req.params.id);
		res.status(200).json({
			status:'success',
			message:'Product Deleted Successfully'
		})
	}catch(err){
		next(err);
	}
}
exports.deleteEmployee = async(req,res,next)=>{
	try{
		await employeeModel.findByIdAndDelete(req.params.id);
		res.status(200).json({
			status:'success',
			message:'Employee Deleted Successfully'
		})
	}catch(err){
		next(err);
	}
}
exports.deleteItem = async(req,res,next)=>{
	try{
		await itemModel.findByIdAndDelete(req.params.id);
		res.status(200).json({
			status:'success',
			message:'Item Deleted Successfully'
		})
	}catch(err){
		next(err);
	}
}
exports.deleteItemStock = async(req,res,next)=>{
	try{
		await itemStockModel.findByIdAndDelete(req.params.id);
		res.status(200).json({
			status:'success',
			message:'Item Stock Deleted Successfully'
		})
	}catch(err){
		next(err);
	}
}
exports.deleteJob = async(req,res,next)=>{
	try{
		await jobModel.findByIdAndDelete(req.params.id);
		res.status(200).json({
			status:'success',
			message:'Job Deleted Successfully'
		})
	}catch(err){
		next(err);
	}
}
exports.deleteOrderDetails = async(req,res,next)=>{
	try{
		await orderDetailsModel.findByIdAndDelete(req.params.id);
		res.status(200).json({
			status:'success',
			message:'Order Detail Deleted Successfully'
		})
	}catch(err){
		next(err);
	}
}
exports.deleteOrder = async(req,res,next)=>{
	try{
		await ordersModel.findByIdAndDelete(req.params.id);
		res.status(200).json({
			status:'success',
			message:'Order Deleted Successfully'
		})
	}catch(err){
		next(err);
	}
}
exports.deleteStore = async(req,res,next)=>{
	try{
		await storeModel.findByIdAndDelete(req.params.id);
		res.status(200).json({
			status:'success',
			message:'Store Deleted Successfully'
		})
	}catch(err){
		next(err);
	}
}
exports.deleteSupplier = async(req,res,next)=>{
	try{
		await supplierModel.findByIdAndDelete(req.params.id);
		res.status(200).json({
			status:'success',
			message:'Supplier Deleted Successfully'
		})
	}catch(err){
		next(err);
	}
}
exports.deleteVoucher = async(req,res,next)=>{
	try{
		await voucherModel.findByIdAndDelete(req.params.id);
		res.status(200).json({
			status:'success',
			message:'Voucher Deleted Successfully'
		})
	}catch(err){
		next(err);
	}
}