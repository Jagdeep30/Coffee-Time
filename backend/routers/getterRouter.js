const express = require("express");
const { getAllCountries, getAllStates, getAllCities, getAllProducts, getProduct, getAllEmployees, getAllItems, getAllItemStocks, getAllJobs, getAllOrderDetails, getAllOrders, getAllStores, getAllSuppliers, getAllUsers, getAllVouchers, getAllVoucherReds, getEmployees, getEmployee, getItem, getItemStock, getJob, getOrderDetail, getOrder, getStore, getSupplier, getUser, getVoucher, getVoucherRed } = require("../controllers/getterController.js");

const router = express.Router();

router.route("/getCountries").get(getAllCountries);
router.route("/getStates").get(getAllStates);
router.route("/getCities").get(getAllCities);
router.route('/getProducts').get(getAllProducts);
router.route('/getEmployees').get(getAllEmployees);
router.route('/getItems').get(getAllItems);
router.route('/getItemStocks').get(getAllItemStocks);
router.route('/getJobs').get(getAllJobs);
router.route('/getOrderDetails').get(getAllOrderDetails);
router.route('/getOrders').get(getAllOrders);
router.route('/getStores').get(getAllStores);
router.route('/getSuppliers').get(getAllSuppliers);
router.route('/getUsers').get(getAllUsers);
router.route('/getVouchers').get(getAllVouchers);
router.route('/getVoucherReds').get(getAllVoucherReds);

router.route('/getProduct').get(getProduct);
router.route('/getEmployee').get(getEmployee);
router.route('/getItem').get(getItem);
router.route('/getItemStock').get(getItemStock);
router.route('/getJob').get(getJob);
router.route('/getOrderDetails').get(getOrderDetail);
router.route('/getOrder').get(getOrder);
router.route('/getStore').get(getStore);
router.route('/getSupplier').get(getSupplier);
router.route('/getUser').get(getUser);
router.route('/getVoucher').get(getVoucher);
router.route('/getVoucherRed').get(getVoucherRed);


module.exports = router;
