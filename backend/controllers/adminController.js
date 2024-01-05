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
exports.addvoucher = async (req, res) => {
	let data = { ...req.body };
	data.amount = parseInt(data.amount);

	await voucherModel.create(data);
	// console.log(response);
	res.redirect('http://localhost:3000/admin/voucherForm');
};

exports.addEmp = async (req,res)=>{
	let data = { ...req.body };
	console.log(data);
	await employeeModel.create(data);
	res.redirect('http://localhost:3000/admin/employeeForm');
}

exports.addjob = async (req,res)=>{
	let data = {...req.body};
	await jobModel.create(data);
	res.redirect('http://localhost:3000/admin/jobForm');
}
exports.addproduct = async (req,res)=>{
	let data = {...req.body};
	await productModel.create(data);
	res.redirect('http://localhost:3000/admin/productForm');
}
exports.additem = async (req,res)=>{
	let data = {...req.body};
	await itemModel.create(data);
	res.redirect('http://localhost:3000/admin/itemForm');
}
exports.additemstock = async (req,res)=>{
	let data = {...req.body};
	await itemStockModel.create(data);
	res.redirect('http://localhost:3000/admin/itemStockForm');
}
exports.addstore = async (req,res)=>{
	let data = {...req.body};
	await storeModel.create(data);
	res.redirect('http://localhost:3000/admin/storeForm');
}
exports.addsupplier = async (req,res)=>{
	let data = {...req.body};
	await supplierModel.create(data);
	res.redirect('http://localhost:3000/admin/supplierForm');
}



//controllers for updating the value in a document based on its _id
exports.updateProduct = async(req,res)=>{
	await productModel.findByIdAndUpdate(req.query.id,req.body);
	res.redirect('http://localhost:3000/admin/productForm');
}
exports.updateEmployee = async(req,res)=>{
	await employeeModel.findByIdAndUpdate(req.query.id,req.body);
	res.redirect('http://localhost:3000/admin/empForm');
}
exports.updateJob = async(req,res)=>{
	await jobModel.findByIdAndUpdate(req.query.id,req.body);
	res.redirect('http://localhost:3000/admin/jobForm');
}
exports.updateItem = async(req,res)=>{
	await itemModel.findByIdAndUpdate(req.query.id,req.body);
	res.redirect('http://localhost:3000/admin/itemForm');
}
exports.updateItemStock = async(req,res)=>{
	await itemstockModel.findByIdAndUpdate(req.query.id,req.body);
	res.redirect('http://localhost:3000/admin/itemstockForm');
}
exports.updateStore = async(req,res)=>{
	await storeModel.findByIdAndUpdate(req.query.id,req.body);
	res.redirect('http://localhost:3000/admin/storeForm');
}
exports.updateSupplier = async(req,res)=>{
	await supplierModel.findByIdAndUpdate(req.query.id,req.body);
	res.redirect('http://localhost:3000/admin/supplierForm');
}
