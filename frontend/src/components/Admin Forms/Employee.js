import React, { useEffect, useState } from "react";

import './adminForm.css';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";




const Employee = (props) => {
	const [states, setStates] = useState([]);
	const [countries, setCountries] = useState([]);
	const [cities, setCities] = useState([]);
	const [jobs, setJobs] = useState([]);
	const [stores, setStores] = useState([]);

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [address1, setAddress1] = useState('');
	const [address2, setAddress2] = useState('');
	const [pincode, setPincode] = useState('');
	const [countryID, setCountryID] = useState('');
	const [stateID, setStateID] = useState('state');
	const [cityID, setCityID] = useState('city');
	const [jobID, setJobID] = useState('');
	const [storeID, setStoreID] = useState('');
	const [dOL, setDOL] = useState('');

	const navigate = useNavigate();

	const params = useParams();
	const id = params.id;
	let result = {};

	const resetForm = () => {
		setFirstName('');
		setLastName('');
		setPhone('');
		setEmail('');
		setAddress1('');
		setAddress2('');
		setPincode('');
		setCountryID('');
		setStateID('state');
		setCityID('city');
		setJobID('');
		setStoreID('');
		setDOL('');
	  };

	const getData = async()=>{
		result = await axios.get(`http://localhost:5000/api/v1/admin/employees/${id}`);
		// console.log(result.data);
		setFirstName(result.data.data.firstName);
		setLastName(result.data.data.lastName);
		setPhone(result.data.data.phone);
		setEmail(result.data.data.email);
		setAddress1(result.data.data.address1);
		setAddress2(result.data.data.address2);
		setPincode(result.data.data.pincode);
		setCountryID(result.data.data.countryID);
		setStateID(result.data.data.stateID);
		setCityID(result.data.data.cityID);
		setJobID(result.data.data.jobID);
		setStoreID(result.data.data.storeID);
		setDOL(result.data.data.dateOfLeaving);
	}

	const handleFNameChange = (e)=>{
		// console.log(e);
		setFirstName(e.target.value);
	}
	const handleLNameChange = (e)=>{
		setLastName(e.target.value);
	}
	const handlePhoneChange = (e)=>{
		setPhone(e.target.value);
	}
	const handleEmailChange = (e)=>{
		setEmail(e.target.value);
	}
	const handleAdd1Change = (e)=>{
		setAddress1(e.target.value);
	}
	const handleAdd2Change = (e)=>{
		setAddress2(e.target.value);
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
	const handleJobChange = (e)=>{
		setJobID(e.target.value);
	}
	const handleStoreChange = (e)=>{
		setStoreID(e.target.value);
	}
	const handleDOLChange = (e)=>{
		setDOL(e.target.value);
	}



	const axiosBackend = axios.create({
		baseURL: 'http://localhost:5000/api/v1/admin',
	  });
	  
	const handleFormSubmission = async(e)=>{
		e.preventDefault();
		console.log(e);

		let data = new FormData(e.target);
		let info = {};
			for(let entry of data.entries()){
				info[entry[0]] = entry[1];
			}

		if(props.task==='Add'){
			
			let res = await axios.post(`http://localhost:5000/api/v1/admin/employees`,info);
			// console.log(res);
		}
		else if(props.task==='Update'){
			// console.log(info);
			
			// let res = await axios.patch(`/api/v1/admin/employees/${id}`,info);
			// let res = axiosBackend.put(`/employees/${id}`,info);
			let res = await axios({
				method: 'put',
				url: `http://localhost:5000/api/v1/admin/employees/${id}`,
				data: info
			});
			// console.log(res);
		}
		navigate('/admin/all/employees');

		return;
	}
	
	const getCountries = async()=>{
		let c = await axios.get('http://localhost:5000/api/v1/admin/countries');
		// console.log(c.data);
		setCountries(c.data.data);
	}
	const getStates = async(value)=>{
		// console.log(value);
		if(!value)return;
		let d = await axios.get(`http://localhost:5000/api/v1/admin/states/${value}`);
		// console.log(d);
		setStates(d.data.data);
	}
	// const getStates = async(value)=>{
	// 	// console.log(value);
	// 	let d = await axios.get(`http://localhost:5000/api/v1/getter/getStates?countryID=${value.target.value}`);
	// 	// console.log(d);
	// 	setStates(d.data);
	// }
	const getCities = async(value)=>{
		// console.log(value);
		if(value==='state')return;
		let d = await axios.get(`http://localhost:5000/api/v1/admin/cities/${value}`);
		// console.log(d);
		setCities(d.data.data);
	}
	const getJobs = async(value)=>{
		let d = await axios.get(`http://localhost:5000/api/v1/admin/jobs`);
		setJobs(d.data.data);
	}
	const getStores = async()=>{
		let c = await axios.get('http://localhost:5000/api/v1/admin/stores');
		// console.log(c.data);
		setStores(c.data.data);
	}
	useEffect(()=>{
		getStates(countryID);
	},[countryID]);
	useEffect(()=>{
		getCities(stateID);
	},[stateID]);

	useEffect(()=>{
		getCountries();
		getJobs();
		getStores();
		if(props.task==='Update')getData();
		else if(props.task==='Add')resetForm();
	},[props.task]);




	return (
		<div className='admin-sign-form'>
			<div className='admin-form-bg'>
				<div className='container'>
					<div className='admin-form-container'>
						<div className='admin-formHead'>
							<h3 className='admin-title'>{props.task} Employee</h3>
						</div>
						<form onSubmit={handleFormSubmission} className='form-horizontal clearfix' encType="multipart/form-data">
							<div className="input-group">
								<label htmlFor="firstname" className="form-label">First Name:</label>
								<div className='form-group'>
									<input
										type='text'
										name='firstName'
										id="firstname"
										className='form-control'
										placeholder='First Name'
										value={firstName}
										onChange={handleFNameChange}
										required
									/>
								</div>
							</div>
							<div className="input-group">
								<label htmlFor="lastname" className="form-label">Last Name:</label>
							<div className='form-group'>
								<input
									type='text'
									id="lastname"
									name='lastName'
									className='form-control'
									placeholder='Last Name'
									value={lastName}
										onChange={handleLNameChange}
									required
								/>
							</div>
							</div>
							<div className="input-group">
								<label htmlFor="phone" className="form-label">Phone:</label>
							<div className='form-group'>
								<input
									type='tel'
									id="phone"
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
									id="email"
									name='email'
									className='form-control'
									placeholder='Email'
									value={email}
									onChange={handleEmailChange}
									required
								/>
							</div>
							</div>
							{props.task==='Add' && <div className="input-group">
								<label htmlFor="dob" className="form-label">D.O.B:</label>
							<div className='form-group'>
								<input
									type='date'
									id="dob"
									name='dateOfBirth'
									className='form-control'
									placeholder='Date Of Birth'
									required
								/>
							</div>
							</div>}
							{props.task==='Add' && <div className="input-group">
								<label htmlFor="gender" className="form-label">Gender:</label>
							<div className='form-group radio-grp'>
								<input
									type='radio'
									name='gender'
									id="m"
									className='form-control'
									value='male'
									required
								/>
								<label htmlFor="m">Male</label>
								<input
									type='radio'
									name='gender'
									id="f"
									className='form-control'
									value='female'
									required
								/>
								<label htmlFor="f">Female</label>
							</div>
							</div>}
							<div className="input-group">
								<label htmlFor="address1" className="form-label">Address Line 1:</label>
							<div className='form-group'>
								<textarea
									id="address1"
									name='address1'
									className='form-control'
									placeholder='Address Line 1'
									value={address1}
									onChange={handleAdd1Change}
									required
								></textarea>
							</div>
							</div>
							<div className="input-group">
								<label htmlFor="address2" className="form-label">Address Line 2:</label>
							<div className='form-group'>
								<textarea
									name='address2'
									id="address2"
									className='form-control'
									placeholder='Address Line 2'
									value={address2}
									onChange={handleAdd2Change}
								></textarea>
							</div>
							</div>
							<div className="input-group">
								<label htmlFor="pincode" className="form-label">Pincode:</label>
							<div className='form-group'>
								<input
									type='text'
									id="pincode"
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
									// onChange={getStates}
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
									// onChange={getCities}
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
							<div className="input-group">
								<label htmlFor="job" className="form-label">Job:</label>
							<div className='form-group'>
								<select
									name='jobID'
									id='job'
									className='form-control'
									value={jobID}
									onChange={handleJobChange}
								>
									
									{jobs.map((val)=>{
										return (<option value={val._id} key={val._id}>{val.jobName}</option>);
									})}
								</select>
							</div>
							</div>
							<div className="input-group">
								<label htmlFor="store" className="form-label">Store:</label>
							<div className='form-group'>
								<select
									name='storeID'
									id='store'
									className='form-control'
									value={storeID}
									onChange={handleStoreChange}
								>
									
									 {stores.map((val)=>{
										 return (<option value={val._id} key={val._id}>{val.storeName}</option>);
									})}
								</select>
							</div>
							</div>
							{props.task==='Add' && <div className="input-group">
								<label htmlFor="doj" className="form-label">Date of Joining:</label>
							<div className='form-group'>
								<input
									type='date'
									id="doj"
									name='dateOfJoining'
									className='form-control'
									placeholder='Date Of Joining'
									required
								/>
							</div>
							</div>}
							<div className="input-group">
								<label htmlFor="dol" className="form-label">Date of Leaving:</label>
							<div className='form-group'>
								<input
									type='date'
									id="dol"
									name='dateOfLeaving'
									className='form-control'
									placeholder='Date Of Leaving'
									value={dOL}
									onChange={handleDOLChange}
									// defaultValue={props.task==='Update'?result.data.dateOfLeaving:''}
								/>
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
	);
};

export default Employee;
