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
app.use(cors());
app.use(errorMiddleware);

//routes

app.use('/api/v1/shop',shopRouter);
app.use('/api/v1/user',userRouter);
app.use('/api/v1/admin',adminRouter);
app.use('/api/v1/getter',getterRouter);
// app.use('/api/v1/admin',adminRouter);


module.exports = app;
