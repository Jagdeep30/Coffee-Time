const express = require("express");
const { addvoucher, addEmp, addjob, addproduct, additem, additemstock, addstore, addsupplier, updateProduct, updateEmployee, updateJob, updateItem, updateItemStock, updateStore, updateSupplier } = require("../controllers/adminController");
const { getAllCountries, getAllStates, getAllCities, getAllProducts, getProduct, getAllEmployees, getAllItems, getAllItemStocks, getAllJobs, getAllOrderDetails, getAllOrders, getAllStores, getAllSuppliers, getAllUsers, getAllVouchers, getAllVoucherReds, getEmployees, getEmployee, getItem, getItemStock, getJob, getOrderDetail, getOrder, getStore, getSupplier, getUser, getVoucher, getVoucherRed, getState, getCity } = require("../controllers/getterController.js");


const multer  = require('multer')
const upload = multer({ dest: '../uploads/' })

const router = express.Router();

// router.route("/addvoucher").post(addvoucher);
// router.route("/addEmp").post(addEmp);
// router.route("/addJob").post(addjob);
// router.route("/addProduct").post(addproduct);
// router.route("/addItem").post(additem);
// router.route("/addItemstock").post(additemstock);
// router.route("/addStore").post(addstore);
// router.route("/addSupplier").post(addsupplier);

// router.route('/updateEmp').post(updateEmployee);
// router.route('/updateJob').post(updateJob);
// router.route('/updateProduct').post(updateProduct);
// router.route('/updateItem').post(updateItem);
// router.route('/updateItemStock').post(updateItemStock);
// router.route('/updateStore').post(updateStore);
// router.route('/updateSupplier').post(updateSupplier);

router.route("/states/:id").get(getAllStates); // to get all states according to countryID
router.route("/cities/:id").get(getAllCities); // to get all cities according to stateID

router.route("/countries").get(getAllCountries);
router.route('/products').get(getAllProducts).post(addproduct);
router.route('/employees').get(getAllEmployees).post(upload.none(),addEmp);
router.route('/items').get(getAllItems).post(additem);
router.route('/itemStocks').get(getAllItemStocks).post(additemstock);
router.route('/jobs').get(getAllJobs).post(addjob);
router.route('/orderDetails').get(getAllOrderDetails);
router.route('/orders').get(getAllOrders);
router.route('/stores').get(getAllStores).post(addstore);
router.route('/suppliers').get(getAllSuppliers).post(addsupplier);
router.route('/users').get(getAllUsers);
router.route('/vouchers').get(getAllVouchers).post(addvoucher);
router.route('/voucherReds').get(getAllVoucherReds);



// router.route("/states/:id").get(getState);
// router.route("/cities/:id").get(getCity);


router.route('/products/:id').get(getProduct).patch(updateProduct);
router.route('/employees/:id').get(getEmployee).patch(upload.none(),updateEmployee);
router.route('/items/:id').get(getItem).patch(updateItem);
router.route('/itemStocks/:id').get(getItemStock).patch(updateItemStock);
router.route('/jobs/:id').get(getJob).patch(updateJob);
router.route('/orderDetails/:id').get(getOrderDetail);
router.route('/orders/:id').get(getOrder);
router.route('/stores/:id').get(getStore).patch(updateStore);
router.route('/suppliers/:id').get(getSupplier).patch(updateSupplier);
router.route('/users/:id').get(getUser);
router.route('/vouchers/:id').get(getVoucher);
router.route('/voucherReds/:id').get(getVoucherRed);


module.exports = router;
