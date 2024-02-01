import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import handleImageUpload from '../../UploadImage';

const baseURL = 'https://coffee-time-one.vercel.app/api/v1/';

const Store = (props) => {
	const navigate = useNavigate();
	const [storeName, setStoreName] = useState('');

	const [states, setStates] = useState([]);
	const [countries, setCountries] = useState([]);
	const [cities, setCities] = useState([]);
	const [countryID, setCountryID] = useState('');
	const [stateID, setStateID] = useState('state');
	const [cityID, setCityID] = useState('city');
	const [image, setImage] = useState(undefined)
	

	const params = useParams();
	const id = params.id;
	let result = '';

	const resetForm = () => {
		setCities([]);
		setCountries([]);
		setStates([]);
		setCountryID('');
		setStateID('state');
		setCityID('city');
		setStoreName('');
	  };

	const getData = async()=>{
		result = await axios.get(baseURL+`/admin/stores/${id}`);

		setStoreName(result.data.data.storeName);
		setCountryID(result.data.data.countryID);
		setStateID(result.data.data.stateID);
		setCityID(result.data.data.cityID);
	}

	const handleStoreNameChange = (e)=>{
		setStoreName(e.target.value);
	}
	const handleCountryChange = (e)=>{
		setCountryID(e.target.value);
	}
	const handleStateChange = (e)=>{
		setStateID(e.target.value);
	}
	const handleCityChange = (e)=>{
		setCityID(e.target.value);
	}


	const getCountries = async()=>{
		let c = await axios.get(baseURL+'admin/countries');
		// console.log(c.data);
		setCountries(c.data.data);
	}
	const getStates = async(value)=>{
		// console.log(value);
		if(!value)return;
		let d = await axios.get(baseURL+`/admin/states/${value}`);
		// console.log(d);
		setStates(d.data.data);
	}
	const getCities = async(value)=>{
		// console.log(value);
		if(value==='state')return;
		let d = await axios.get(baseURL+`/admin/cities/${value}`);
		// console.log(d);
		setCities(d.data.data);
	}




	const handleFormSubmission = async(e)=>{
		e.preventDefault();
		// console.log(e);

		let data = new FormData(e.target);
		// console.log(data);
		// let info = {};
		// 	for(let entry of data.entries()){
		// 		info[entry[0]] = entry[1];
		// 	}

		let img = await handleImageUpload(image);
		data.append('storeImage',img.name);
		console.log(data.get('storeImage'));

		console.log(data);
		let info = data;


		// console.log("entered"+img);
		info.storeImage = img.name;
		if(props.task==='Add'){
			
			let res = await axios.post(baseURL+`/admin/stores`,info);
			// console.log(res);
		}
		else if(props.task==='Update'){
			// console.log(info);
			
			// let res = await axios.patch(`/api/v1/admin/employees/${id}`,info);
			let res = await axios.put(baseURL+`/admin/stores/${id}`,info);
			// let res = await axios({
			// 	method: 'put',
			// 	url: baseURL+`/admin/employees/${id}`,
			// 	data: info
			// });
			// console.log(res);
		}
		navigate('/admin/all/stores');

		
	}
	





	useEffect(()=>{
		getStates(countryID);
	},[countryID]);
	useEffect(()=>{
		getCities(stateID);
	},[stateID]);


	useEffect(()=>{
		getCountries();
		if(props.task==='Update'){
			getData();
		}
		else if(props.task==='Add')resetForm();
	},[props.task]);
  return (
    <div className='admin-sign-form'>
			<div className='admin-form-bg'>
				<div className='container'>
					<div className='admin-form-container'>
						<div className='admin-formHead'>
							<h3 className='admin-title'>{props.task} Store</h3>
						</div>
						{/* <form action={baseURL+`/admin/stores/${id}`} method="POST"  className='form-horizontal clearfix'> */}
						<form onSubmit={handleFormSubmission} className='form-horizontal clearfix' encType='multipart/form-data'>
						<div className="input-group">
								<label htmlFor="firstname" className="form-label">Store Name:</label>
								<div className='form-group'>
									<input
										type='text'
										name='storeName'
										id="storeName"
										className='form-control'
										placeholder='Store Name'
										value={storeName}
										onChange={handleStoreNameChange}
										required
									/>
								</div>
							</div>
							<div className="input-group">
								<label htmlFor="storeimg" className="form-label">Store Image:</label>
							<div className='form-group'>
								<input
									type='file'
									id='storeimg'
									name='storeImage'
									className='form-control'
									accept='image/*'
									onChange={(e)=>{setImage(e.target.files[0])}}
								/>
							</div>
							</div>
							<div className="input-group">
								<label htmlFor="country" className="form-label">Country:</label>
							<div className='form-group'>
								<select
									name='countryID'
									id='country'
									className='form-control'
									value={countryID}
									onChange={handleCountryChange}
								>
									<option disabled value='country'>Country</option>
									{countries.map((val)=>{
										 return (<option value={val._id} key={val._id}>{val.countryName}</option>);
									})}
								</select>
							</div>
							</div>
							
							<div className="input-group">
								<label htmlFor="state" className="form-label">State:</label>
							<div className='form-group'>
								<select
									name='stateID'
									id='state'
									className='form-control'
									value={stateID}
									onChange={handleStateChange}
								>
									<option disabled value='state'>State</option>

									{states.map((val)=>{
										return (<option value={val._id} key={val._id}>{val.stateName}</option>);
									})}
								</select>
							</div>
							</div>
							<div className="input-group">
								<label htmlFor="city" className="form-label">City:</label>
							<div className='form-group'>
								<select
									name='cityID'
									id='city'
									className='form-control'
									value={cityID}
									onChange={handleCityChange}
								>
									<option disabled value='city'>City</option>
									{cities.map((val)=>{
										return (<option value={val._id} key={val._id}>{val.cityName}</option>);
									})}
								</select>
							</div>
							</div>
							<button type='submit' className='btn btn-default'>
								<i className='fa fa-arrow-right'></i> {props.task}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Store;