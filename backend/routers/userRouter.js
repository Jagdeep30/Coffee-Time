const express = require("express");
const path = require("path");
const multer = require('multer');
const uploads = multer({dest:'../uploads/'});

const app = require("../app.js");
const { addUser, login } = require("../controllers/userController.js");

const router = express.Router();

router.route('/login').post(uploads.none(),login);
router.route("/").post(uploads.none(),addUser);

module.exports = router;
