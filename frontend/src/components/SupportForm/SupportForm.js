import { useRef, useState } from 'react';
import axios from 'axios';
import './support.css';
import { updateMail, updateName, updatePhone, updateQuery } from '../../state/action-creators';
import { useDispatch } from 'react-redux';
import emailjs from '@emailjs/browser';

const SupportForm = ()=>{
	const formRef = useRef();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [query, setQuery] = useState('');

	const handleFormSubmission = ()=>{
		emailjs.send('service_8ceqcpy', 'template_y91ll8q','p21Ad1fVDax1SkFNS', {name,email,mesaage:query})
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
		};
		// await axios.post('https://api.emailjs.com/api/v1.0/email/send',{
		// 	service_id:"service_8ceqcpy",
		// 	template_id:"template_y91ll8q",
		// 	user_id:"p21Ad1fVDax1SkFNS",
		// 	template_params:{
		// 		name,
		// 		email,
		// 		message:query
		// 	}
		// })
	
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
												<form className='form-horizontal clearfix' ref={formRef}>
													<div className='form-group'>
														<span className='input-icon'>
															<i className='fa fa-user'></i>
														</span>
														<input
															type='text'
															className='form-control'
															placeholder='Name'
															value={name}
															onChange={(e)=>{setName(e.target.value)}}
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
															value={email}
															onChange={(e)=>{setEmail(e.target.value)}}
														/>
													</div>
													<div className='form-group'>
														<span className='input-icon'>
															<i className='fa fa-user'></i>
														</span>
														<textarea
															className='form-control'
															placeholder='Query'
															value={query}
															onChange={(e)=>{setQuery(e.target.value)}}
														></textarea>
													</div>
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
								Cancel
							</button>
							<button
								type='button'
								className='btn btn-confirm'
								data-bs-dismiss='modal'
                                onClick={handleFormSubmission}

								// data-bs-toggle='modal'
								// data-bs-target='#exampleModal0'
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