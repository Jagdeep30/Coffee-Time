import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const RawItem = (props) => {
	const [itemName, setItemName] = useState('');

	const params = useParams();
	const id = params.id;
	let result = '';

	const resetForm = () => {
		setItemName('');
	  };

	const getData = async()=>{
		result = await axios.get(`http://localhost:5000/api/v1/admin/items/${id}`);

		setItemName(result.data.data.rName);
	}

	const handleItemNameChange = (e)=>{
		// console.log(e);
		setItemName(e.target.value);
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
						<form action={`http://localhost:5000/api/v1/admin/items/${id}`} method="POST"  className='form-horizontal clearfix'>
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