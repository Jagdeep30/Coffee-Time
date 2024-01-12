const express = require('express');
const cors = require('cors');

const dbcon = require('./dbconnect.js');
const shopRouter = require('./routers/shopRouter.js');
const userRouter = require('./routers/userRouter.js');
const adminRouter = require('./routers/adminRouter.js');
const getterRouter = require('./routers/getterRouter.js');
const errorMiddleware = require('./middlewares/errorMiddleware.js');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

let options = {
    "origin": "http://localhost:3000",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  };
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

app.use('/api/v1/shop',shopRouter);
app.use('/api/v1/user',userRouter);
app.use('/api/v1/admin',adminRouter);
app.use('/api/v1/getter',getterRouter);
// app.use('/api/v1/admin',adminRouter);


module.exports = app;
