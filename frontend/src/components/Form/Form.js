import "./form.css";

import { useState } from "react";

const Form = (props) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [code, setCode] = useState("");

	const nameChange = (e) => {
		setName(e.target.value);
	};
	const codeChange = (e) => {
		setCode(e.target.value);
	};
	const emailChange = (e) => {
		setEmail(e.target.value);
	};
	const phoneChange = (e) => {
		setPhone(e.target.value);
	};

	return (
		<>
			<form className='form d-flex flex-column'>
				<h1 className='grand-hotel'>Redeem your Voucher</h1>
				<div className='rowf mb-3'>
					<label for='code' className='col-sm-4 col-form-label'>
						Voucher Code
					</label>
					<div className='col-sm-8'>
						<input
							type='text'
							className='form-control'
							id='code'
							onChange={codeChange}
							required
						/>
					</div>
				</div>
				<div className='rowf mb-3'>
					<label for='name' className='col-sm-4 col-form-label'>
						Name
					</label>
					<div className='col-sm-8'>
						<input
							type='text'
							className='form-control'
							id='name'
							onChange={nameChange}
							required
						/>
					</div>
				</div>
				<div className='rowf mb-3'>
					<label for='email' className='col-sm-4 col-form-label'>
						Email
					</label>
					<div className='col-sm-8'>
						<input
							type='email'
							className='form-control'
							id='email'
							onChange={emailChange}
							required
						/>
					</div>
				</div>
				<div className='rowf mb-3'>
					<label for='phone' className='col-sm-4 col-form-label'>
						Phone
					</label>
					<div className='col-sm-8'>
						<input
							type='tel'
							className='form-control'
							id='phone'
							onChange={phoneChange}
							required
						/>
					</div>
				</div>

				

				<button
					type='button'
					className={`btn btn-primary ${name&&email&&code&&phone ? '':'disabled'}`}
					data-bs-toggle='modal'
					data-bs-target='#exampleModal5'
				>
					Redeem
				</button>
	</form>

			{/* <!-- Button trigger modal --> */}

			{/* <!-- Modal --> */}
			<div
				className='modal fade'
				id='exampleModal5'
				tabindex='-1'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							{/* <h5 className='modal-title' id='exampleModalLabel'>
								Modal title
							</h5> */}
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>
						<div className='modal-body h6'>
							Code : {code}
							<br />
							Name : {name}
							<br />
							Email : {email}
							<br />
							Phone : {phone}
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-bs-dismiss='modal'
							>
								Change
							</button>
							<button type='button' className='btn btn-primary'
							data-bs-dismiss='modal' onClick={(e)=>{
								props.formm(false);
								console.log(e.target)
								alert("Order Placed ✅")
								}}
								style={{'backgroundColor':'var(--primary-color','outline':'none','border':'none'}}>
								Confirm
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Form;
