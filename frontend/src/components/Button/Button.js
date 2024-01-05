import { useDispatch, useSelector } from "react-redux";
import {setOrder,unSetOrder, updateAddress, updateMail, updateName, updatePhone} from './../../state/action-creators/index';
import { HashLink } from "react-router-hash-link";
import "./button.css";
import { useRef } from "react";

const Button = () => {
	const signIn = useSelector((state) => state.signIn);
	const formRef = useRef();
	const dispatch = useDispatch();
	return (
		<>
			<button
				className="button montserrat"
				data-bs-toggle={signIn?'modal':''}
				data-bs-target={signIn?'#exampleModal':''}
				onClick={()=>{
					dispatch(setOrder())
					
				}}
			>
				
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<HashLink smooth to='/signin#signin'>Order Now</HashLink>
			</button>

			<div
				className='modal fade'
				id='exampleModal'
				tabIndex='-1'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								Enter Details
							</h5>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>
						<div className='modal-body h6'>
							<div className='form-bg'>
								<div className='container'>
									<div className='row'>
										<div className=''>
											<div className='form-container'>
												<div className='form-icon'>
													<i className='fa fa-user'></i>
												</div>
												
												<form className='form-horizontal clearfix' ref={formRef}>
													<div className='form-group'>
														<span className='input-icon'>
															<i className='fa fa-user'></i>
														</span>
														<input
															type='text'
															className='form-control'
															placeholder='Name'
														/>
													</div>
													<div className='form-group'>
														<span className='input-icon'>
															<i className='fa fa-user'></i>
														</span>
														<input
															type='tel'
															className='form-control'
															placeholder='Phone'
														/>
													</div>
													<div className='form-group'>
														<span className='input-icon'>
															<i className='fa fa-user'></i>
														</span>
														<input
															type='email'
															className='form-control'
															placeholder='Email'
														/>
													</div>
													<div className='form-group'>
														<span className='input-icon'>
															<i className='fa fa-user'></i>
														</span>
														<textarea
															className='form-control'
															placeholder='Address'
														></textarea>
													</div>


													<div className='input-group'>
														<div className='input-group-text'>
                                                            <span>Payment: </span>
															<input
																className='form-check-input mt-0'
																type='radio'
                                                                name="payment"
																value='upi'
                                                                id="upi"
																aria-label='Radio button for following text input'
															/>
                                                            <label htmlFor="upi">UPI</label>
															<input
																className='form-check-input mt-0'
																type='radio'
                                                                name="payment"
																value='card'
                                                                id="card"
																aria-label='Radio button for following text input'
															/>
                                                            <label htmlFor="card">Card</label>
														</div>
														
													</div>


													{/* <div className='form-group'>
														<span className='input-icon'>
															<i className='fa fa-user'></i>
														</span>
														<span>Payment: </span>
														<input
															id='upi'
															type='text'
															className=''
														/>
														<label htmlFor='upi'>
															UPI
														</label>
														<input
															id='card'
															type='text'
															className=''
														/>
														<label htmlFor='card'>
															Card
														</label>
													</div> */}

													
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-bs-dismiss='modal'
							>
								Change
							</button>
							<button
								type='button'
								className='btn btn-confirm'
								data-bs-dismiss='modal'
								onClick={() => {
									alert("Order Placed ✅");
									dispatch(updateName(formRef.current[0].value))
									dispatch(updatePhone(formRef.current[1].value))
									dispatch(updateMail(formRef.current[2].value))
									dispatch(updateAddress(formRef.current[3].value))
									formRef.current.reset()
								}}

								data-bs-toggle='modal'
								data-bs-target='#exampleModal0'
							>
								Confirm
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Button;
