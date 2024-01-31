import React,{ useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PropTypes from 'prop-types';
import handleImageUpload from "../../UploadImage";

const baseURL = 'http://localhost:5000/api/v1/';

const Product = (props) => {
	// const [data, setData] = useState({});
	const navigate = useNavigate();
	const [name,setName] = useState('');
	const [unitPrice,setUnitPrice] = useState('');
	const [description,setDescription] = useState('');
	const [image, setImage] = useState(undefined);

	const params = useParams();
	const id = params.id;

	const resetForm = () => {
		setName('');
		setUnitPrice('');
		setDescription('');
	  };

	const getData = async()=>{
		let result = await axios.get(baseURL+`/admin/products/${id}`);
		// setData(result.data);
		setName(result.data.data.name);
		setUnitPrice(result.data.data.unitPrice);
		setDescription(result.data.data.description);
	}

	const handleNameChange = (e)=>{
		// console.log(e);
		setName(e.target.value);
	}
	const handlePriceChange = (e)=>{
		// console.log(e);
		setUnitPrice(e.target.value);
	}
	const handleDescChange = (e)=>{
		// console.log(e);
		setDescription(e.target.value);
	}


	const handleFormSubmission = async(e)=>{
		e.preventDefault();
		// console.log(e);

		let data = new FormData(e.target);
		let img = await handleImageUpload(image);
		// console.log(data);
		// let info = {};
		// 	for(let entry of data.entries()){
		// 		info[entry[0]] = entry[1];
		// 	}

		data.append('productImage',img.name);
		// console.log(data.get('productImage'));

		// console.log(data);
		let info = data;
		// console.log("entered"+img);
		// info.productImage = img.name;
		if(props.task==='Add'){
			
			let res = await axios.post(baseURL+`/admin/products`,info);
			// console.log(res);
		}
		else if(props.task==='Update'){
			// console.log(info);
			
			// let res = await axios.patch(`/api/v1/admin/employees/${id}`,info);
			let res = await axios.put(baseURL+`/admin/products/${id}`,info);
			// let res = await axios({
			// 	method: 'put',
			// 	url: baseURL+`/admin/employees/${id}`,
			// 	data: info
			// });
			// console.log(res);
		}
		navigate('/admin/all/products');

		
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
							<h3 className='admin-title'>{props.task} Product</h3>
						</div>
						<form
							onSubmit={handleFormSubmission} 
							encType="multipart/form-data"
							className='form-horizontal clearfix'
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
										onChange={(e)=>{setImage(e.target.files[0])}}
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

Product.propTypes = {
	task:PropTypes.string.isRequired
}

export default Product;
