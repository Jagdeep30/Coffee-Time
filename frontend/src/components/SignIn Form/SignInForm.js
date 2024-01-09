import "./signinform.css";

import { Link } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import { useEffect, useRef, useState } from "react";

import {signIn,sigOut, unSetOrder, updateName, updatePassword} from './../../state/action-creators/index';
import updatedLogo from './../../assets/updatedLogo.png';

const SignInForm = () => {


	const [showPassowrd, setShowPassowrd] = useState(false);
	const formRef = useRef();
	const order = useSelector(state => state.order);
	const signin = useSelector(state => state.signIn);
	const dispatch = useDispatch();

	const handleShowPassword = ()=>{
		setShowPassowrd(!showPassowrd);
	}

	useEffect(()=>{
		document.body.classList.add("background-image");
		return ()=>{
			document.body.classList.remove("background-image");
		}
	},[]);
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
								<form className='form-horizontal clearfix' action="http://localhost:5000/api/v1/user/login" method="post">
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
										/>
										<span id="eye" className="form-icon" onClick={handleShowPassword}><i className={`fa-regular fa-eye${showPassowrd?'-slash':''}`}></i></span>
									</div>
									<button
										type='submit'
										className='btn btn-default'
										// onClick={()=>{alert(`Account Created \nHappy Coffee Time 🍵 ${order?'\nOrder Successful✅':''}`)
										// dispatch(updateName(formRef.current[0].value))
										// dispatch(signIn())
										// dispatch(updatePassword(formRef.current[1].value))
										// dispatch(unSetOrder())
										// formRef.current.reset()
										// // window.scrollY('-500px')
										// console.log(signin)
										// console.log(formRef.current[0].value)
									// }}
										// data-bs-toggle='modal'
										// data-bs-target='#exampleModal0'
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
