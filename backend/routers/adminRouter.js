const express = require("express");
const { addvoucher, addEmp, addjob, addproduct, additem, additemstock, addstore, addsupplier, updateProduct, updateEmployee, updateJob, updateItem, updateItemStock, updateStore, updatesSupplier, updateSupplier } = require("../controllers/adminController");

const router = express.Router();

router.route("/addvoucher").post(addvoucher);
router.route("/addEmp").post(addEmp);
router.route("/addJob").post(addjob);
router.route("/addProduct").post(addproduct);
router.route("/addItem").post(additem);
router.route("/addItemstock").post(additemstock);
router.route("/addStore").post(addstore);
router.route("/addSupplier").post(addsupplier);

router.route('/updateProduct').post(updateProduct);
router.route('/updateEmp').post(updateEmployee);
router.route('/updateJob').post(updateJob);
router.route('/updateItem').post(updateItem);
router.route('/updateItemStock').post(updateItemStock);
router.route('/updateStore').post(updateStore);
router.route('/updateSupplier').post(updateSupplier);

module.exports = router;
