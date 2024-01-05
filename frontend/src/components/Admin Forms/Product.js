import React,{ useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = (props) => {
	// const [data, setData] = useState({});
	const [name,setName] = useState('');
	const [unitPrice,setUnitPrice] = useState('');
	const [description,setDescription] = useState('');
	const params = useParams();
	const id = params.id;

	const getData = async()=>{
		let result = await axios.get(`http://localhost:5000/api/v1/getter/getProduct?id=${id}`);
		// setData(result.data);
		setName(result.data.name);
		setUnitPrice(result.data.unitPrice);
		setDescription(result.data.description);
	}

	const handleNameChange = (e)=>{
		console.log(e);
		setName(e.target.value);
	}
	const handlePriceChange = (e)=>{
		console.log(e);
		setUnitPrice(e.target.value);
	}
	const handleDescChange = (e)=>{
		console.log(e);
		setDescription(e.target.value);
	}


	useEffect(()=>{
		if(props.task==='Update'){
			getData();
		}
	},[])
	return (
		<div className='admin-sign-form'>
			<div className='admin-form-bg'>
				<div className='container'>
					<div className='admin-form-container'>
						<div className='admin-formHead'>
							<h3 className='admin-title'>{props.task} Product</h3>
						</div>
						<form
							action={`http://localhost:5000/api/v1/admin/${props.task.toLowerCase()}Product?id=${id}`}
							className='form-horizontal clearfix'
							method="POST"
						>
							<div className='input-group'>
								<label
									htmlFor='product'
									className='form-label'
								>
									Product Name:
								</label>
								<div className='form-group'>
									<input
										type='text'
										id="product"
										name='name'
										className='form-control'
										placeholder='Product Name'
										value={name}
										onChange={handleNameChange}
										required
									/>
								</div>
							</div>
							<div className='input-group'>
								<label
									htmlFor='unitprice'
									className='form-label'
								>
									Unit Price:
								</label>
								<div className='form-group'>
									<input
										type='number'
										id="unitprice"
										name='unitPrice'
										className='form-control'
										placeholder='Unit Price'
										value={unitPrice}
										onChange={handlePriceChange}
										required
									/>
								</div>
							</div>
							<div className='input-group'>
								<label
									htmlFor='productimg'
									className='form-label'
								>
									Product Image:
								</label>
								<div className='form-group'>
									<input
										type='file'
										id="productimg"
										name='productImg'
										className='form-control'
										// required
									/>
								</div>
							</div>
							<div className='input-group'>
								<label
									htmlFor='desc'
									className='form-label'
								>
									Description:
								</label>
								<div className='form-group'>
									<textarea
										name='description'
										id="desc"
										className='form-control'
										placeholder='Product Description'
										value={description}
										onChange={handleDescChange}
										required
									></textarea>
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
	);
};

export default Product;
