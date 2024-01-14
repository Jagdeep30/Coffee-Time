import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Voucher = () => {
	const navigate = useNavigate();


	const handleFormSubmission = async(e)=>{
		e.preventDefault();
		// console.log(e);

		let data = new FormData(e.target);
		// let info = {};
		// 	for(let entry of data.entries()){
		// 		info[entry[0]] = entry[1];
		// 	}

		let info = data;
			
		let res = await axios.post(`http://localhost:5000/api/v1/admin/vouchers`,info);
		// console.log(res);
		
		
		navigate('/admin/all/vouchers');

		return;
	}
	return (
		<div className='admin-sign-form'>
			<div className='admin-form-bg'>
				<div className='container'>
					<div className='admin-form-container'>
						<div className='admin-formHead'>
							<h3 className='admin-title'>Add Voucher</h3>
						</div>
						<form
							onSubmit={handleFormSubmission}
							encType="multipart/form-data"
							className='form-horizontal clearfix'
						>
							<div className='input-group'>
								<label
									htmlFor='vouchercode'
									className='form-label'
								>
									Voucher Code:
								</label>
								<div className='form-group'>
									<input
										type='text'
										id='vouchercode'
										name='voucherCode'
										className='form-control'
										placeholder='Voucher Code'
										required
									/>
								</div>
							</div>
							<div className='input-group'>
								<label htmlFor='amount' className='form-label'>
									Amount:
								</label>
								<div className='form-group'>
									<input
										type='number'
										id='amount'
										name='amount'
										className='form-control'
										placeholder='Amount'
										required
									/>
								</div>
							</div>
							<div className='input-group'>
								<label htmlFor='expiry' className='form-label'>
									Expiry Date:
								</label>
								<div className='form-group'>
									<input
										type='date'
										id='expiry'
										name='expiryDate'
										className='form-control'
										placeholder='Expiry Date'
										required
									/>
								</div>
							</div>
							<div className='input-group'>
								<label
									htmlFor='issuedate'
									className='form-label'
								>
									Issue Date:
								</label>
								<div className='form-group'>
									<input
										type='date'
										id='issuedate'
										name='issueDate'
										className='form-control'
										placeholder='Issue Date'
										required
									/>
								</div>
							</div>
							<button type='submit' className='btn btn-default'>
								<i className='fa fa-arrow-right'></i> Add
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Voucher;
