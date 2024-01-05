

// const t = ()=>{
// 	co.forEach(async (value)=>{
// 		await countryModel.create({countryName:value.name});
// 		// countries.push({countryName:value.name});
// 	})
	
// }
// console.log(countries);


// countryModel.insertMany(country).then(()=>console.log("done")).catch(err=>{throw err});

const stateModel = require("./models/stateModel.js");
const cityModel = require('./models/cityModel.js');

const t =  () => {
	let i = 1;
    console.log('started');
    cities.forEach(async(value)=>{
        let result = await stateModel.find({ stateName: value.state_name });
        await cityModel.create({ 'cityName': value.name, 'stateID': result[0]._id });
    	console.log('done'+i);
		i++;
    })


}
// const t = async () => {
// 	let result = await countryModel.find({ countryName: "India" });
//     console.log(result);
// 	await stateModel.create({ 'stateName': "Punjbabbb", 'countryID': result[0]._id });
// };

module.exports = t;
