import "./signinform.css";

import { Link, useNavigate, useNavigation } from "react-router-dom";
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect, useRef, useState } from "react";
import updatedLogo from './../../assets/updatedLogo.png';
import { addUserData, loggedIn } from "../../state/action-creators";

const SignInForm = () => {


	const [showPassowrd, setShowPassowrd] = useState(false);
	const formRef = useRef();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	

	const handleShowPassword = ()=>{
		setShowPassowrd(!showPassowrd);
	}

	const handleFormSubmission = async(e)=>{
		e.preventDefault();

		let data = new FormData(e.target);

		let user = await axios.post('http://localhost:5000/api/v1/user/login',data);

		if(user.data.status==='success'){
			console.log('success');
			dispatch(addUserData(user.data.data));
			dispatch(loggedIn(true));
			user.data.data.role==='admin'?navigate('/admin'):navigate('/');
		}
	}

	useEffect(()=>{
		document.body.classList.add("background-image");
		return ()=>{
			document.body.classList.remove("background-image");
		}
	},[]);


	/// use  (useNavigate to redirect the user to homepage after login and create a function to handle the data )
	return (
		<div id="signin" className='sign-form'>
			<div className='form-bg'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3'>
							<div className='form-container'>
								<img src={updatedLogo} alt="Logo" className="formLogo logo"/>
								<h3 className='title'>login</h3>
								<span className='create-account'>
									<Link to='/signup'>create account</Link>
								</span>
								<form className='form-horizontal clearfix' onSubmit={handleFormSubmission} encType="multipart/form-data">
									<div className='form-group'>
										<input
											type='text'
											className='form-control'
											placeholder='Email'
											name="email"
										/>
									</div>
									<div className='form-group'>
										<input
											type={`${showPassowrd?'text':'password'}`}
											className='form-control'
											placeholder='Password'
											name="password"
											minLength='8'
										/>
										<span id="eye" className="form-icon" onClick={handleShowPassword}><i className={`fa-regular fa-eye${showPassowrd?'-slash':''}`}></i></span>
									</div>
									<button
										type='submit'
										className='btn btn-default'
									>
										 Login
									</button>
									<span className='forgot'>
										<a href='http://localhost:5000/user/forgotPassword'>Forgot Password?</a>
									</span>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignInForm;
