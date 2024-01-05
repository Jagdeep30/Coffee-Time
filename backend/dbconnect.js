const mysql2 = require('mysql2');

const dotenv = require("dotenv");
dotenv.config({ path: './.env' });


// console.log(process.env.DB_PASSWORD);
// console.log(process.env.HOSTNAME);


// let connection = mysql2.createConnection({
//     host:process.env.HOSTNAME,
//     user:process.env.USERNAME,
//     password:process.env.DB_PASSWORD,
//     database:process.env.DBNAME,
//     multipleStatements:true
// })

// connection.connect((err)=>{
//     if(err){
//         throw err;
//     }
//     else console.log("Database connected successfully");
// });

// module.exports = connection;



const mongoose = require('mongoose');

const dbcon = async()=>{
    let uri = process.env.URI_STRING;
    uri = uri.replace('<USERNAME>',process.env.USER_NAME);
    uri = uri.replace('<DB_PASSWORD>',process.env.DB_PASSWORD);
    console.log(uri);
    await mongoose.connect(uri,{
        dbName:'coffee_shop'
    });
    console.log('Database connected successfully');
}

module.exports = dbcon;



//? this will be used if we write connection code in server file
// let uri = process.env.URI_STRING;
// uri = uri.replace('<USERNAME>',process.env.USER_NAME);
// uri = uri.replace('<DB_PASSWORD>',process.env.DB_PASSWORD);
// mongoose.connect(uri,{
//     dbName:'coffee_shop'
// }).then(()=>console.log('Database connected successfully')).catch((err)=>console.log(err));


