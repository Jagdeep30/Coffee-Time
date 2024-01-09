import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const RawItemStock = (props) => {
	const [price, setPrice] = useState('');
	const [quantity, setQuantity] = useState('');

	const [items, setItems] = useState([]);
	const [suppliers, setSuppliers] = useState([]);
	const [stores, setStores] = useState([]);
	const [storeID, setStoreID] = useState('');
	const [itemName, setItemName] = useState('');
	const [supplierID, setSupplierID] = useState('');
	const getItems = async()=>{
		let c = await axios.get('http://localhost:5000/api/v1/admin/items');
		// console.log(c.data);
		setItems(c.data.data);
	}
	const getSuppliers = async()=>{
		let c = await axios.get('http://localhost:5000/api/v1/admin/suppliers');
		// console.log(c.data);
		setSuppliers(c.data.data);
	}
	const getStores = async()=>{
		let c = await axios.get('http://localhost:5000/api/v1/admin/stores');
		// console.log(c.data);
		setStores(c.data.data);
	}

	const params = useParams();
	const id = params.id;
	let result = '';

	const resetForm = () => {
		setSuppliers([]);
		setPrice('');
		setQuantity('');
		setStoreID('');
		setSupplierID('');
		setItemName('');
		setItems([]);
		setStores([]);
	  };

	const getData = async()=>{
		result = await axios.get(`http://localhost:5000/api/v1/admin/itemStocks/${id}`);

		setPrice(result.data.data.price);
		setQuantity(result.data.data.quantity);
		setStoreID(result.data.data.storeID);
		setSupplierID(result.data.data.supplierID);
		setItemName(result.data.data.itemName);
		
	}

	const handlePriceChange = (e)=>{
		// console.log(e);
		setPrice(e.target.value);
	}
	const handleQuantityChange = (e)=>{
		// console.log(e);
		setQuantity(e.target.value);
	}
	const handleItemNameChange = (e)=>{
		// console.log(e);
		setItemName(e.target.value);
	}
	const handleSupplierChange = (e)=>{
		// console.log(e);
		setSupplierID(e.target.value);
	}
	const handleStoreChange = (e)=>{
		// console.log(e);
		setStoreID(e.target.value);
	}

	useEffect(()=>{
		getItems();
		getSuppliers();
		getStores();
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
							<h3 className='admin-title'>{props.task} Stock</h3>
						</div>
						<form action={`http://localhost:5000/api/v1/admin/itemStocks/${id}`} method="POST"  className='form-horizontal clearfix'>
							<div className="input-group">
								<label htmlFor="rID" className="form-label">Item Name:</label>
						<div className='form-group'>
								<select
									name='rID'
									id='rID'
									className='form-control'
									placeholder='Item'
									value={itemName}
									onChange={handleItemNameChange}
								>
									
									{items.map((val)=>{
										 return (<option value={val._id} key={val._id}>{val.rName}</option>);
									})}
								</select>
							</div>
							</div>
							<div className="input-group">
								<label htmlFor="quantity" className="form-label">Quantity:</label>
							<div className='form-group'>
								<input
									type='number'
									id='quantity'
									name='quantity'
									className='form-control'
									placeholder='Quantity(in Kg)'
									value={quantity}
										onChange={handleQuantityChange}
									required
								/>
							</div>
							</div>
							<div className="input-group">
								<label htmlFor="price" className="form-label">Price:</label>
							<div className='form-group'>
								<input
									type='number'
									id='price'
									name='price'
									className='form-control'
									placeholder='Price'
									value={price}
										onChange={handlePriceChange}
									required
								/>
							</div>
							</div>
							{props.task==='Add' && <div className="input-group">
								<label htmlFor="date" className="form-label">Date:</label>
							<div className='form-group'>
								<input
									type='date'
									id='date'
									name='date'
									className='form-control'
									placeholder='Date'
									required
								/>
							</div>
							</div>}
							<div className="input-group">
								<label htmlFor="supplier" className="form-label">Supplier:</label>
							<div className='form-group'>
								<select
									name='supplierID'
									id='supplier'
									className='form-control'
									placeholder='Supplier'
									value={supplierID}
									onChange={handleSupplierChange}
								>
									
									{suppliers.map((val)=>{
										 return (<option value={val._id} key={val._id}>{val.supplierName}</option>);
										})}
								</select>
							</div>
							</div>
							<div className="input-group">
								<label htmlFor="store" className="form-label">Store:</label>
							
							<div className='form-group'>
								<select
									name='storeID'
									id='store'
									className='form-control'
									value={storeID}
									onChange={handleStoreChange}
								>
									
									{stores.map((val)=>{
										 return (<option value={val._id} key={val._id}>{val.storeName}</option>);
									})}
								</select>
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

export default RawItemStock