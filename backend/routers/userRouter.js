const express = require("express");
// const path = require("path");

// const multer = require('multer');

// const app = require("../app.js");
const { addUser, login, getUser, getUsers, updateUser } = require("../controllers/userController.js");

const router = express.Router();

router.route('/login').post(login);
router.route('/:id').get(getUser).put(updateUser);
router.route("/").post(addUser).get(getUsers);

module.exports = router;
