const express = require("express");
const { addvoucher, addEmp, addjob, addproduct, additem, additemstock, addstore, addsupplier, updateProduct, updateEmployee, updateJob, updateItem, updateItemStock, updateStore, updateSupplier, addOrderDetails, addOrder, deleteProduct, deleteEmployee, deleteItem, deleteItemStock, deleteJob, deleteOrderDetails, deleteOrder, deleteStore, deleteSupplier, deleteVoucher, addVoucherRed } = require("../controllers/adminController");
const { getAllCountries, getAllStates, getAllCities, getAllProducts, getProduct, getAllEmployees, getAllItems, getAllItemStocks, getAllJobs, getAllOrderDetails, getAllOrders, getAllStores, getAllSuppliers, getAllUsers, getAllVouchers, getAllVoucherReds, getEmployees, getEmployee, getItem, getItemStock, getJob, getOrderDetail, getOrder, getStore, getSupplier, getUser, getVoucher, getVoucherRed, getState, getCity, getVoucherFromCode,getCountry } = require("../controllers/getterController.js");
const verifyReq = require("../middlewares/verifyMiddleware.js");



const router = express.Router();

router.route("/states/:id").get(getAllStates); // to get all states according to countryID
router.route("/cities/:id").get(getAllCities); // to get all cities according to stateID


router.route("/city/:id").get(getCity); // to get all cities according to stateID
router.route("/state/:id").get(getState); // to get all cities according to stateID
router.route("/country/:id").get(getCountry); // to get all cities according to stateID

router.route("/countries").get(getAllCountries);
router.route('/products').get(getAllProducts).post(verifyReq,addproduct);
router.route('/employees').get(verifyReq,getAllEmployees).post(verifyReq,addEmp);
router.route('/items').get(verifyReq,getAllItems).post(verifyReq,additem);
router.route('/itemStocks').get(verifyReq,getAllItemStocks).post(verifyReq,additemstock);
router.route('/jobs').get(verifyReq,getAllJobs).post(verifyReq,addjob);
router.route('/orderDetails').get(verifyReq,getAllOrderDetails).post(verifyReq,addOrderDetails);
router.route('/orders').get(verifyReq,getAllOrders).post(verifyReq,addOrder);
router.route('/stores').get(getAllStores).post(verifyReq,addstore);
router.route('/suppliers').get(verifyReq,getAllSuppliers).post(verifyReq,addsupplier);
router.route('/users').get(verifyReq,getAllUsers);
router.route('/vouchers').get(verifyReq,getAllVouchers).post(verifyReq,addvoucher);
router.route('/voucherReds').get(verifyReq,getAllVoucherReds).post(verifyReq,addVoucherRed);



// router.route("/states/:id").get(getState);
// router.route("/cities/:id").get(getCity);


router.route('/products/:id').get(getProduct).put(verifyReq,updateProduct).delete(verifyReq,deleteProduct);
router.route('/employees/:id').get(verifyReq,getEmployee).put(verifyReq,updateEmployee).delete(verifyReq,deleteEmployee);
router.route('/items/:id').get(verifyReq,getItem).put(verifyReq,updateItem).delete(verifyReq,deleteItem);
router.route('/itemStocks/:id').get(verifyReq,getItemStock).put(verifyReq,updateItemStock).delete(verifyReq,deleteItemStock);
router.route('/jobs/:id').get(verifyReq,getJob).put(verifyReq,updateJob).delete(verifyReq,deleteJob);
router.route('/orderDetails/:id').get(verifyReq,getOrderDetail).delete(verifyReq,deleteOrderDetails);
router.route('/orders/:id').get(verifyReq,getOrder).delete(verifyReq,deleteOrder);
router.route('/stores/:id').get(verifyReq,getStore).put(verifyReq,updateStore).delete(verifyReq,deleteStore);
router.route('/suppliers/:id').get(verifyReq,getSupplier).put(verifyReq,updateSupplier).delete(verifyReq,deleteSupplier);
// router.route('/users/:id').get(getUser);
router.route('/vouchers/:id').get(verifyReq,getVoucher).delete(verifyReq,deleteVoucher);
router.route('/voucherReds/:id').get(verifyReq,getVoucherRed);
router.route('/vouchers/code/:code').get(verifyReq,getVoucherFromCode);

module.exports = router;
