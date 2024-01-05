import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const RawItem = (props) => {
	const [itemName, setItemName] = useState('');

	const params = useParams();
	const id = params.id;
	let result = '';

	const getData = async()=>{
		result = await axios.get(`http://localhost:5000/api/v1/getter/getItem?id=${id}`);

		setItemName(result.data.itemName);
	}

	const handleItemNameChange = (e)=>{
		// console.log(e);
		setItemName(e.target.value);
	}

	useEffect(()=>{
		if(props.task==='Update'){
			getData();
		}
	},[]);

  return (
    <div className='admin-sign-form'>
			<div className='admin-form-bg'>
				<div className='container'>
					<div className='admin-form-container'>
						<div className='admin-formHead'>
							<h3 className='admin-title'>{props.task} Item</h3>
						</div>
						<form action={`http://localhost:5000/api/v1/admin/${props.task.toLowerCase()}Item?id=${id}`} method="POST"  className='form-horizontal clearfix'>
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