import { useSelector } from "react-redux"

const Modal = ()=>{
    const {name,email,address,phone,query} = useSelector(state=>state);
    return(
        <div
				className='modal fade'
				id='exampleModal0'
				tabIndex='-1'
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
							{name?`Name : ${name}`:''}
							{name?<br/>:''}
							{email?`Email : ${email}`:''}
							{email?<br/>:''}
							{phone?`Phone : ${phone}`:''}
							{phone?<br/>:''}
							{address?`Address : ${address}`:''}
							{address?<br/>:''}
							{query?`Query : ${query}`:''}
						</div>
					</div>
				</div>
			</div>
    )
}

export default Modal;