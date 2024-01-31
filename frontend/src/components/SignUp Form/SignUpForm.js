import "./signupform.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

// import {
// 	signIn,
// 	sigOut,
// 	unSetOrder,
// 	updateName,
// 	updatePassword,
// 	updatePhone,
// } from "./../../state/action-creators/index";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import updatedLogo from './../../assets/updatedLogo.png';
import { addUserData, loggedIn } from "../../state/action-creators";
import handleImageUpload from "../../UploadImage";

const baseURL = 'http://localhost:5000/api/v1/';

const SignUpForm = (props) => {

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [states, setStates] = useState([]);
	const [countries, setCountries] = useState([]);
	const [cities, setCities] = useState([]);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [address1, setAddress1] = useState("");
	const [address2, setAddress2] = useState("");
	const [pincode, setPincode] = useState("");
	const [countryID, setCountryID] = useState("");
	const [stateID, setStateID] = useState("state");
	const [cityID, setCityID] = useState("city");
	const [password, setPassword] = useState("");
	const [passwordC, setPasswordC] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [showPasswordC, setShowPasswordC] = useState(false);
	const [image, setImage] = useState(undefined)

	const params = useParams();
	const id = params.id;
	const user = useSelector(state=>state.user);
	const login = useSelector(state=>state.login);

	let result;
	const getData = async () => {
		if(!login){
			navigate('/signin');
			return;
		}
		result = await axios.get(
			baseURL+`/user/${user._id}`
		);
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
	};

	const handleFNameChange = (e) => {
		// console.log(e);
		setFirstName(e.target.value);
	};
	const handleLNameChange = (e) => {
		setLastName(e.target.value);
	};
	const handlePhoneChange = (e) => {
		setPhone(e.target.value);
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handleAdd1Change = (e) => {
		setAddress1(e.target.value);
	};
	const handleAdd2Change = (e) => {
		setAddress2(e.target.value);
	};
	const handlePincodeChange = (e) => {
		setPincode(e.target.value);
	};
	const handleCountryChange = (e) => {
		setCountryID(e.target.value);
	};
	const handleStateChange = (e) => {
		setStateID(e.target.value);
	};
	const handleCityChange = (e) => {
		setCityID(e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};
	const handlePasswordCChange = (e) => {
		setPasswordC(e.target.value);
	};
	const handleShowPassword = ()=>{
		setShowPassword(!showPassword);
	}
	const handleShowPasswordC = ()=>{
		setShowPasswordC(!showPasswordC);
	}

	const handleFormSubmission = async(e)=>{
		e.preventDefault();
		let img = '';
		if(image!==undefined)img = await handleImageUpload(image);
		let data = new FormData(e.target);
		if(image!==undefined)data.append('profileImage',img.name);
		// let info = {};
		// for(let entry of data.entries()){
		// 	info[entry[0]] = entry[1];
		// }
		// info.profileImage = img.name;
		
		// console.log(data.get('profileImage'));

		// console.log(data);
		let info = data;
		if(props.task==='Add'){
			let res = await axios.post(baseURL+`/user`,info);
			if(res.data.status==='success'){
				dispatch(addUserData(res.data.data));
				dispatch(loggedIn(true));
			}
		}
		else if(props.task==='Update'){
			let res = await axios.put(baseURL+`/user/${user._id}`,info);

		}


		// console.log(info);

		navigate('/');
	}

	const getCountries = async () => {
		let c = await axios.get(
			baseURL+"/admin/countries"
		);
		// console.log(c.data);
		setCountries(c.data.data);
	};
	const getStates = async (value) => {
		// console.log(value);
		if(!value)return;
		let d = await axios.get(
			baseURL+`/admin/states/${value}`
		);
		// console.log(d);
		setStates(d.data.data);
	};
	const getCities = async (state) => {
		// console.log(value);
		if(state==='state')return;
		let d = await axios.get(
			baseURL+`/admin/cities/${state}`
		);
		// console.log(d);
		setCities(d.data.data);
	};

	useEffect(() => {
		getCountries();
		if (props.task === "Update") {
			getData();
		}
	}, [props.task]);

	useEffect(()=>{
		getStates(countryID);
	},[countryID]);
	useEffect(()=>{
		getCities(stateID);
	},[stateID]);

	useEffect(()=>{
		document.body.classList.add("background-image");
		return ()=>{
			document.body.classList.remove("background-image");
		}
	},[]);

	useEffect(()=>{
		if(props.task==='Update'){
			getData();
		}
	},[props.task])

	
	return (
		<div className='sign-form'>
			<div className='form-bg'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3'>
							<div className='form-container'>
							<img src={updatedLogo} alt="Logo" className="formLogo logo"/>
								<h3 className='title'>{props.task==="Add"?"Sign Up":"Update Profile"}</h3>
								<form
									className='form-horizontal clearfix'
									onSubmit={handleFormSubmission}
									encType="multipart/form-data"
								>
									<div className="input-group">
								<label htmlFor="profileImage" className="form-label">Profile Image:</label>
							<div className='form-group'>
								<input
									type='file'
									id='profileImage'
									name='profileImage'
									className='form-control'
									accept='image/*'
									onChange={(e)=>{setImage(e.target.files[0])}}
								/>
							</div>
							</div>
									<div className='input-group'>
										<label
											htmlFor='firstname'
											className='form-label'
										>
											First Name:
										</label>
										<div className='form-group'>
											<input
												type='text'
												name='firstName'
												id='firstname'
												className='form-control'
												placeholder='First Name'
												value={firstName}
												onChange={handleFNameChange}
												required
											/>
										</div>
									</div>
									<div className='input-group'>
										<label
											htmlFor='lastname'
											className='form-label'
										>
											Last Name:
										</label>
										<div className='form-group'>
											<input
												type='text'
												id='lastname'
												name='lastName'
												className='form-control'
												placeholder='Last Name'
												value={lastName}
												onChange={handleLNameChange}
												required
											/>
										</div>
									</div>
									<div className='input-group'>
										<label
											htmlFor='phone'
											className='form-label'
										>
											Phone:
										</label>
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
									<div className='input-group'>
										<label
											htmlFor='email'
											className='form-label'
										>
											Email:
										</label>
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

									<div className='input-group'>
										<label
											htmlFor='address1'
											className='form-label'
										>
											Address Line 1:
										</label>
										<div className='form-group'>
											<textarea
												id='address1'
												name='address1'
												className='form-control'
												placeholder='Address Line 1'
												value={address1}
												onChange={handleAdd1Change}
												required
											></textarea>
										</div>
									</div>
									<div className='input-group'>
										<label
											htmlFor='address2'
											className='form-label'
										>
											Address Line 2:
										</label>
										<div className='form-group'>
											<textarea
												name='address2'
												id='address2'
												className='form-control'
												placeholder='Address Line 2'
												value={address2}
												onChange={handleAdd2Change}
											></textarea>
										</div>
									</div>
									<div className='input-group'>
										<label
											htmlFor='pincode'
											className='form-label'
										>
											Pincode:
										</label>
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
									<div className='input-group'>
										<label
											htmlFor='country'
											className='form-label'
										>
											Country:
										</label>
										<div className='form-group'>
											<select
												name='countryID'
												id='country'
												className='form-control'
												defaultValue={countryID}
												onChange={handleCountryChange}
											>
												{/* <option disabled>Country</option> */}
												{countries.map((val) => {
													return (
														<option
															value={val._id}
															key={val._id}
														>
															{val.countryName}
														</option>
													);
												})}
											</select>
										</div>
									</div>

									<div className='input-group'>
										<label
											htmlFor='state'
											className='form-label'
										>
											State:
										</label>
										<div className='form-group'>
											<select
												name='stateID'
												id='state'
												className='form-control'
												value={stateID}
												onChange={handleStateChange}
											>
												<option disabled value='state'>
													State
												</option>

												{states.map((val) => {
													return (
														<option
															value={val._id}
															key={val._id}
														>
															{val.stateName}
														</option>
													);
												})}
											</select>
										</div>
									</div>
									<div className='input-group'>
										<label
											htmlFor='city'
											className='form-label'
										>
											City:
										</label>
										<div className='form-group'>
											<select
												name='cityID'
												id='city'
												className='form-control'
												value={cityID}
												onChange={handleCityChange}
											>
												<option disabled value='city'>
													City
												</option>
												{cities.map((val) => {
													return (
														<option
															value={val._id}
															key={val._id}
														>
															{val.cityName}
														</option>
													);
												})}
											</select>
										</div>
									</div>
									{props.task==='Add' && <div className='input-group'>
										<label
											htmlFor='password'
											className='form-label'
										>
											Password (must be atleast 8 characters):
										</label>
										<div className='form-group'>
											<input
												type={`${showPassword?'text':'password'}`}
												id='password'
												name='password'
												className='form-control'
												placeholder='Password'
												value={password}
												minLength='8'
												onChange={handlePasswordChange}
												required
											/>
											<span id="eye" className="form-icon" onClick={handleShowPassword}><i className={`fa-regular fa-eye${showPassword?'-slash':''}`}></i></span>
										</div>
									</div>}
									{props.task==='Add' && <div className='input-group'>
										<label
											htmlFor='passwordC'
											className='form-label'
										>
											Password:
										</label>
										<div className='form-group'>
											<input
												type={`${showPasswordC?'text':'password'}`}
												id='passwordC'
												name='passwordConfirm'
												className='form-control'
												placeholder='Confirm Password'
												value={passwordC}
												minLength='8'
												onChange={handlePasswordCChange}
												required
											/>
											<span id="eye" className="form-icon" onClick={handleShowPasswordC}><i className={`fa-regular fa-eye${showPasswordC?'-slash':''}`}></i></span>
										</div>
										{passwordC!==password && <span className="validation">Password does not match!</span>}
									</div>}
									
									<button
										type='submit'
										className='btn btn-default'
										disabled={password!==passwordC}
									>
										{props.task==="Add"?"Sign Up":"Update"}
									</button>
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
