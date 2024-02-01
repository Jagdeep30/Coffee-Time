const express = require('express');
const cors = require('cors');
const multer = require('multer');
const uploads = multer();

const dbcon = require('./dbconnect.js');
const shopRouter = require('./routers/shopRouter.js');
const userRouter = require('./routers/userRouter.js');
const adminRouter = require('./routers/adminRouter.js');
const getterRouter = require('./routers/getterRouter.js');
const errorMiddleware = require('./middlewares/errorMiddleware.js');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(uploads.any());
app.use(cookieParser());
app.use(session({secret:process.env.SESSION_SECRET}));

let options = {
    // "origin": "http://localhost:3000",
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "exposedHeaders":["set-cookie"],
    "credentials":true,
    "allowedHeaders": '*', // Specify allowed headers
    "optionsSuccessStatus": 204, // Set the HTTP status code for successful OPTIONS requests
  };
// let options = {
//     "origin": "http://localhost:3000",
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "exposedHeaders":["set-cookie"],
//     "credentials":true,
//     "allowedHeaders": 'Content-Type,Authorization', // Specify allowed headers
//     "optionsSuccessStatus": 204, // Set the HTTP status code for successful OPTIONS requests
//   };
app.use(cors(options));
// app.use(cors({
//     origin: "http://localhost:3000",
//     optionsSuccessStatus: 200,
//     methods:['GTET','PUT','POST']
// }));
app.use(errorMiddleware);




// var corsOptions = {
//     origin: 'http://example.com',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }
//routes

app.options('/api/v1/user/login', (req, res) => {
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.status(204).end();
});

app.use('/api/v1/shop',shopRouter);
app.use('/api/v1/user',userRouter);
app.use('/api/v1/admin',adminRouter);
app.use('/api/v1/getter',getterRouter);
// app.use('/api/v1/admin',adminRouter);


// module.exports = app;

















const express = require("express");
const dotenv = require("dotenv");

const dbcon = require("./dbconnect.js");
// const app = require("./app.js");

dotenv.config({ path: "./.env" });

dbcon();

// /////////////////////////////////////////////////

// ///////////////////////////////////////////////

app.listen(process.env.PORT, () =>
	console.log(`Server started successfully at port ${process.env.PORT}`)
);