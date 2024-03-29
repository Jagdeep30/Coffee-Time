
const express = require("express");
const dotenv = require("dotenv");

const dbcon = require("./dbconnect.js");
const app = require("./app.js");

dotenv.config({ path: "./.env" });

dbcon();

// /////////////////////////////////////////////////

// ///////////////////////////////////////////////

app.listen(process.env.PORT, () =>
	console.log(`Server started successfully at port ${process.env.PORT}`)
);
