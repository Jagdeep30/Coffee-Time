import "./signinform.css";

import { Link } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import { useRef } from "react";

import {signIn,sigOut, unSetOrder, updateName, updatePassword} from './../../state/action-creators/index';

const SignInForm = () => {
	const formRef = useRef();
	const order = useSelector(state => state.order);
	const signin = useSelector(state => state.signIn);
	const dispatch = useDispatch();
	return (
		<div id="signin" className='sign-form'>
			<div className='form-bg'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3'>
							<div className='form-container'>
								<div className='form-icon'>
									<i className='fa fa-user'></i>
								</div>
								<h3 className='title'>sign in</h3>
								<span className='create-account'>
									<Link to='/dashboard/signup'>create account</Link>
								</span>
								<form className='form-horizontal clearfix' ref={formRef}>
									<div className='form-group'>
										<span className='input-icon'>
											<i className='fa fa-user'></i>
										</span>
										<input
											type='text'
											className='form-control'
											placeholder='Username'
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
									<button
										type='button'
										className='btn btn-default'
										onClick={()=>{alert(`Account Created \nHappy Coffee Time 🍵 ${order?'\nOrder Successful✅':''}`)
										dispatch(updateName(formRef.current[0].value))
										dispatch(signIn())
										dispatch(updatePassword(formRef.current[1].value))
										dispatch(unSetOrder())
										formRef.current.reset()
										// window.scrollY('-500px')
										console.log(signin)
										console.log(formRef.current[0].value)
									}}
										data-bs-toggle='modal'
										data-bs-target='#exampleModal0'
									>
										<i className='fa fa-arrow-right'></i> Sign
										In
									</button>
									<span className='forgot'>
										<a href=''>Forgot Password?</a>
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
