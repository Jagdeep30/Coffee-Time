const express = require("express");
const path = require("path");

const app = require("../app.js");
const { addUser, login } = require("../controllers/userController.js");

const router = express.Router();

router.route('/login').post(login);
router.route("/").post(addUser);

module.exports = router;
