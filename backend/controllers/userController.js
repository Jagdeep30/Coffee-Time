exports.addUser = async(req, res) => {
	// console.log(req.body);
	let data = { ...req.body };
    console.log("method start");
    let cityid,stateid,countryid;

    let country = await dbcon.promise().query(`INSERT INTO COUNTRY(countryName) VALUES('${data.country}')`);
    countryid = country[0].insertId;
    
    let state = await dbcon.promise().query(`INSERT INTO STATE(stateName,countryID) VALUES('${data.state}',${countryid})`);
    stateid = state[0].insertId;
    
    let city = await dbcon.promise().query(`INSERT INTO CITY(cityName,stateID) VALUES('${data.city}',${stateid})`)
    cityid = city[0].insertId;

	let cust = await dbcon.promise().query(
		`INSERT INTO CUSTOMER(firstName,lastName,phone,email,address1,address2,postalCode,cityID,stateID,countryID) VALUES('${data.firstName}','${data.lastName}','${data.phone}','${data.email}','${data.address1}','${!data.address2 ? "" : data.address2}','${data.pincode}','${cityid}','${stateid}','${countryid}')`);
    console.log(cust[0]);
    console.log("method end");

    dbcon.query('select * from customer',(err,results)=>{
        console.log(results);
    });
	res.send(req.body);
}