import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Store = (props) => {
	const [storeName, setStoreName] = useState('');

	const [states, setStates] = useState([]);
	const [countries, setCountries] = useState([]);
	const [cities, setCities] = useState([]);
	const [countryID, setCountryID] = useState('');
	const [stateID, setStateID] = useState('state');
	const [cityID, setCityID] = useState('city');
	

	const params = useParams();
	const id = params.id;
	let result = '';

	const getData = async()=>{
		result = await axios.get(`http://localhost:5000/api/v1/getter/getStore?id=${id}`);

		setStoreName(result.data.storeName);
		setCountryID(result.data.countryID);
		setStateID(result.data.stateID);
		setCityID(result.data.cityID);
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
		let c = await axios.get('http://localhost:5000/api/v1/getter/getCountries');
		// console.log(c.data);
		setCountries(c.data);
	}
	const getStates = async(value)=>{
		// console.log(value);
		if(!value)return;
		let d = await axios.get(`http://localhost:5000/api/v1/getter/getStates?countryID=${value}`);
		// console.log(d);
		setStates(d.data);
	}
	const getCities = async(value)=>{
		// console.log(value);
		if(value==='state')return;
		let d = await axios.get(`http://localhost:5000/api/v1/getter/getCities?stateID=${value}`);
		// console.log(d);
		setCities(d.data);
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
	},[]);
  return (
    <div className='admin-sign-form'>
			<div className='admin-form-bg'>
				<div className='container'>
					<div className='admin-form-container'>
						<div className='admin-formHead'>
							<h3 className='admin-title'>{props.task} Store</h3>
						</div>
						<form action={`http://localhost:5000/api/v1/admin/${props.task.toLowerCase()}Store?id=${id}`} method="POST"  className='form-horizontal clearfix'>
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
									name='storeImg'
									className='form-control'
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