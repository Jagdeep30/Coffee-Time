import './signupform.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from "react";

import {signIn,sigOut,unSetOrder, updateName, updatePassword, updatePhone} from './../../state/action-creators/index';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SignUpForm = (props) => {
	const [states, setStates] = useState([]);
	const [countries, setCountries] = useState([]);
	const [cities, setCities] = useState([]);

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [address1, setAddress1] = useState('');
	const [address2, setAddress2] = useState('');
	const [pincode, setPincode] = useState('');
	const [countryID, setCountryID] = useState('country');
	const [stateID, setStateID] = useState('state');
	const [cityID, setCityID] = useState('city');

	const params = useParams();
	const id = params.id;


	let result;
	const getData = async()=>{
		result = await axios.get(`http://localhost:5000/api/v1/user/getUser?id=${id}`);
		setFirstName(result.data.firstName);
		setLastName(result.data.lastName);
		setPhone(result.data.phone);
		setEmail(result.data.email);
		setAddress1(result.data.address1);
		setAddress2(result.data.address2);
		setPincode(result.data.pincode);
		setCountryID(result.data.countryID);
		setStateID(result.data.stateID);
		setCityID(result.data.cityID);
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
	
	const getCountries = async()=>{
		let c = await axios.get('http://localhost:5000/api/v1/getter/getCountries');
		// console.log(c.data);
		setCountries(c.data);
	}
	const getStates = async(value)=>{
		// console.log(value);
		let d = await axios.get(`http://localhost:5000/api/v1/getter/getStates?countryID=${value.target.value}`);
		// console.log(d);
		setStates(d.data);
	}
	const getCities = async(value)=>{
		// console.log(value);
		let d = await axios.get(`http://localhost:5000/api/v1/getter/getCities?stateID=${value.target.value}`);
		// console.log(d);
		setCities(d.data);
	}

	useEffect(()=>{
		getCountries();
		if(props.task==='Update'){
			getData();
		}
	},[]);




	const order = useSelector(state => state.order);
	const formRef = useRef();
	const dispatch = useDispatch();
	return (
		<div className='sign-form'>
			<div className='form-bg'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3'>
							<div className='form-container'>
								<div className='form-icon'>
									<i className='fa fa-user'></i>
								</div>
								<h3 className='title'>Sign up</h3>
								<form className='form-horizontal clearfix' ref={formRef}>
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
									defaultValue={countryID}
									onChange={getStates}
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
									defaultValue={stateID}
									onChange={getCities}
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
									defaultValue={cityID}
								>
									<option disabled value='city'>City</option>
									{cities.map((val)=>{
										return (<option value={val._id} key={val._id}>{val.cityName}</option>);
									})}
								</select>
							</div>
							</div>
									{/* <div className='form-group'>
										<input
											type='text'
											className='form-control'
											placeholder='First Name'
										/>
									</div>
									<div className='form-group'>
										<input
											type='tel'
											className='form-control'
											placeholder='Phone'
										/>
									</div>
									<div className='form-group'>
										<span className='input-icon'>
											<i className='fa fa-lock'></i>
										</span>
										<input
											type='password'
											className='form-control'
											placeholder='Password'
										/>
									</div>
									<div className='form-group'>
										<span className='input-icon'>
											<i className='fa fa-lock'></i>
										</span>
										<input
											type='password'
											className='form-control'
											placeholder='Confirm Password'
										/>
									</div> */}
									<button
										type='button'
										className='btn btn-default'
										onClick={()=>{alert(`Account Created \nHappy Coffee Time 🍵 ${order?'\nOrder Successful✅':''}`)
										dispatch(signIn())
										// window.location.href = '/'
										dispatch(updateName(formRef.current[0].value))
										dispatch(updatePhone(formRef.current[1].value))
										dispatch(updatePassword(formRef.current[2].value))
										dispatch(unSetOrder())
										formRef.current.reset()

									}}
									data-bs-toggle='modal'
									data-bs-target='#exampleModal0'
									>
										<i className='fa fa-arrow-right'></i> Sign
										Up
									</button>
									{/* <span className='forgot'>
										<a href='#'>Forgot Password?</a>
									</span> */}
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpForm;
