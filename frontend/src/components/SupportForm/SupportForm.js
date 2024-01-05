import { useRef } from 'react';
import './support.css';
import { updateMail, updateName, updatePhone, updateQuery } from '../../state/action-creators';
import { useDispatch } from 'react-redux';

const SupportForm = ()=>{
	const formRef = useRef();
	const dispatch = useDispatch();
    return(
        <>
			<span
				className='support montserrat'
				data-bs-toggle='modal'
				data-bs-target='#exampleModal1'
			>
				Support
			</span>

			<div
				className='modal fade'
				id='exampleModal1'
				tabIndex='-1'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								Enter Query
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
															placeholder='Query'
														></textarea>
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
                                onClick={()=>{
                                    alert(`Query Sent! The support team will contact you soon!`)
									dispatch(updateName(formRef.current[0].value))
									dispatch(updatePhone(formRef.current[1].value))
									dispatch(updateMail(formRef.current[2].value))
									dispatch(updateQuery(formRef.current[3].value))
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
    )
}

export default SupportForm;