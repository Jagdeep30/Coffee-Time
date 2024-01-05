const express = require("express");
const path = require("path");

const app = require("../app.js");
const dbcon = require("../dbconnect.js");
const userController = require('../controllers/userController.js');

const router = express.Router();

router.route("/signup").get((req, res) => {
	res.sendFile(path.resolve(`${__dirname}/../public/signup.html`));
});

router.route("/addUser").post(userController.addUser);

module.exports = router;
