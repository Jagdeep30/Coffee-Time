import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const baseURL = 'https://coffee-time-one.vercel.app/api/v1';

const Supplier = (props) => {
	const [states, setStates] = useState([]);
	const [countries, setCountries] = useState([]);
	const [cities, setCities] = useState([]);

	const [supplierName, setSupplierName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');
	const [pincode, setPincode] = useState('');
	const [countryID, setCountryID] = useState('');
	const [stateID, setStateID] = useState('state');
	const [cityID, setCityID] = useState('city');

	const navigate = useNavigate();
	const params = useParams();
	const id = params.id;
	let result = '';

	const resetForm = () => {
		setStates([]);
		setCountries([]);
		setCities([]);
		setSupplierName('');
		setPhone('');
		setEmail('');
		setAddress('');
		setPincode('');
		setCountryID('');
		setStateID('state');
		setCityID('city');
	  };

	const getData = async()=>{
		result = await axios.get(baseURL+`/admin/suppliers/${id}`);

		setSupplierName(result.data.data.supplierName);
		setPhone(result.data.data.phone);
		setEmail(result.data.data.email);
		setAddress(result.data.data.address);
		setPincode(result.data.data.pincode);
		setCountryID(result.data.data.countryID);
		setStateID(result.data.data.stateID);
		setCityID(result.data.data.cityID);
	}

	const handleSupplierNameChange = (e)=>{
		// console.log(e);
		setSupplierName(e.target.value);
	}
	const handlePhoneChange = (e)=>{
		setPhone(e.target.value);
	}
	const handleEmailChange = (e)=>{
		setEmail(e.target.value);
	}
	const handleAddChange = (e)=>{
		setAddress(e.target.value);
	}
	const handlePincodeChange = (e)=>{
		setPincode(e.target.value);
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
		let c = await axios.get(baseURL+'/admin/countries');
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
		// let info = {};
		// 	for(let entry of data.entries()){
		// 		info[entry[0]] = entry[1];
		// 	}

		let info = data;

		if(props.task==='Add'){
			
			let res = await axios.post(baseURL+`/admin/suppliers`,info);
			// console.log(res);
		}
		else if(props.task==='Update'){
			// console.log(info);
			
			// let res = await axios.patch(`/api/v1/admin/employees/${id}`,info);
			// let res = axiosBackend.put(`/employees/${id}`,info);
			let res = await axios({
				method: 'put',
				url: baseURL+`/admin/suppliers/${id}`,
				data: info
			});
			// console.log(res);
		}
		navigate('/admin/all/suppliers');

		return;
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
							<h3 className='admin-title'>{props.task} Supplier</h3>
						</div>
						<form onSubmit={handleFormSubmission} encType='multipart/form-data' className='form-horizontal clearfix'>
							<div className="input-group">
								<label htmlFor="supplier" className="form-label">Supplier Name:</label>
							<div className='form-group'>
								<input
									type='text'

									id='supplier'
									name='supplierName'
									className='form-control'
									placeholder='Supplier Name'
									value={supplierName}
										onChange={handleSupplierNameChange}
									required
								/>
							</div>
							</div>
							<div className="input-group">
								<label htmlFor="phone" className="form-label">Phone:</label>
							<div className='form-group'>
								<input
									type='tel'
									id='phone'
									name='phone'
									className='form-control'
									placeholder='Phone'
									value={phone}
										onChange={handlePhoneChange}
									required
								/>
							</div>
							</div>
							<div className="input-group">
								<label htmlFor="email" className="form-label">Email:</label>
							<div className='form-group'>
								<input
									type='email'
									id='email'
									name='email'
									className='form-control'
									placeholder='Email'
									value={email}
									onChange={handleEmailChange}
									required
								/>
							</div>
							</div>
							<div className="input-group">
								<label htmlFor="address" className="form-label">Address:</label>
							<div className='form-group'>
								<textarea
									name='address'
									id='address'
									className='form-control'
									placeholder='Address'
									value={address}
									onChange={handleAddChange}
									required
								></textarea>
							</div>
							</div>
							<div className="input-group">
								<label htmlFor="pincode" className="form-label">Pincode:</label>
							<div className='form-group'>
								<input
									type='text'
									id='pincode'
									name='pincode'
									className='form-control'
									placeholder='Pincode'
									value={pincode}
									onChange={handlePincodeChange}
									required
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
									{/* <option disabled>Country</option> */}
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

export default Supplier