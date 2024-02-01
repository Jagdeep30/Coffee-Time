import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const baseURL = 'https://coffee-time-one.vercel.app/api/v1';

const RawItem = (props) => {
	const [itemName, setItemName] = useState('');

	const navigate = useNavigate();

	const params = useParams();
	const id = params.id;
	let result = '';

	const resetForm = () => {
		setItemName('');
	  };

	const getData = async()=>{
		result = await axios.get(baseURL+`/admin/items/${id}`);

		setItemName(result.data.data.rName);
	}

	const handleItemNameChange = (e)=>{
		// console.log(e);
		setItemName(e.target.value);
	}

	const handleFormSubmission = async(e)=>{
		e.preventDefault();
		// console.log(e);

		let data = new FormData(e.target);
		console.log(data);

		let info = data;
		// let info = {};
		// 	for(let entry of data.entries()){
		// 		info[entry[0]] = entry[1];
		// 	}

		if(props.task==='Add'){
			
			let res = await axios.post(baseURL+`/admin/items`,info);
			// console.log(res);
		}
		else if(props.task==='Update'){
			// console.log(info);
			
			// let res = await axios.patch(`/api/v1/admin/employees/${id}`,info);
			// let res = axiosBackend.put(`/employees/${id}`,info);
			let res = await axios({
				method: 'put',
				url: baseURL+`/admin/items/${id}`,
				data: info
			});
			// console.log(res);
		}
		navigate('/admin/all/items');

		return;
	}

	useEffect(()=>{
		if(props.task==='Update'){
			getData();
		}
		else if(props.task==='Add')resetForm();
	},[props.task]);

  return (
    <div className='admin-sign-form'>
			<div className='admin-form-bg'>
				<div className='container'>
					<div className='admin-form-container'>
						<div className='admin-formHead'>
							<h3 className='admin-title'>{props.task} Item</h3>
						</div>
						<form onSubmit={handleFormSubmission} className='form-horizontal clearfix' encType='multipart/form-data'>
						<div className="input-group">
								<label htmlFor="item" className="form-label">Item Name:</label>
							<div className='form-group'>
								<input
									type='text'
									id='item'
									name='rName'
									className='form-control'
									placeholder='Item Name'
									value={itemName}
									onChange={handleItemNameChange}
									required
								/>
							</div>
							</div>
							<button type='submit' className='btn btn-default'>
								<i className='fa fa-arrow-right'></i> {props.task}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
  )
}

export default RawItem