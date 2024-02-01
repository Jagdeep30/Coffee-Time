import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./tables.css";
import { render } from "react-dom";

const baseURL = 'https://coffee-time-one.vercel.app/api/v1';

const Table = (props) => {
	const navigate = useNavigate();
	let str = props.collection;
	const [data, setData] = useState([]);
	const [update, setUpdate] = useState(false);

	const [country, setCountry] = useState([]);
	// const [state, setState] = useState([]);
	// const [city, setCity] = useState([]);
	// const [store, setStore] = useState([]);
	// const [supplier, setSupplier] = useState([]);

	// const getCountry = async(id)=>{
	// 	let res = await axios.get(baseURL+`/admin/countries/${id}`);
	// 	let d = await res;
	// 	setCountry(d.data.data);
	// }

	// const getState = async(id)=>{
	// 	let res = await axios.get(baseURL+`/admin/states/${id}`);
	// 	// setCountry(d.data.data);
	// }

	// const getCity = async(id)=>{
	// 	let res = await axios.get(baseURL+`/admin/cities/${id}`);
	// 	// setCountry(d.data.data);
	// }

	// const getStore = async(id)=>{
	// 	let res = await axios.get(baseURL+`/admin/stores/${id}`);
	// 	// setCountry(d.data.data);
	// }

	// const getSupplier = async(id)=>{
	// 	let res = await axios.get(baseURL+`/admin/suppliers/${id}`);
	// 	// setCountry(d.data.data);
	// }

	const getData = async () => {
		let result = await axios(baseURL+`/admin/${str}`);
		if(result.data.status === 'fail')navigate('/signin')
		// setData(result.data.data);
		let data = result.data.data;
		
		let newDataP = data.map(async(val)=>{
			// console.log("going through all this");
			if(val.hasOwnProperty('storeID')){
				let co = await axios.get(baseURL+`/admin/stores/${val.storeID}`);
				val.storeID = co.data.data.storeName;
			}
			if(val.hasOwnProperty('supplierID')){
				let co = await axios.get(baseURL+`/admin/suppliers/${val.supplierID}`);
				val.supplierID = co.data.data.supplierName;
			}
			if(val.hasOwnProperty('jobID')){
				let co = await axios.get(baseURL+`/admin/jobs/${val.jobID}`);
				val.jobID = co.data.data.jobName;
			}
			if(val.hasOwnProperty('countryID')){
				let co = await axios.get(baseURL+`/admin/country/${val.countryID}`);
				val.countryID = co.data.data.countryName;
			}
			if(val.hasOwnProperty('stateID')){
				let co = await axios.get(baseURL+`/admin/state/${val.stateID}`);
				val.stateID = co.data.data.stateName;
			}
			if(val.hasOwnProperty('cityID')){
				let co = await axios.get(baseURL+`/admin/city/${val.cityID}`);
				val.cityID = co.data.data.cityName;
			}

			return val;
		})
		let newD = await Promise.all(newDataP);
		setData(newD);
		// console.log(newDataP);
	};

	const handleDeleteRequest = async (id) => {
		await axios.delete(baseURL+`/admin/${str}/${id}`);
		setUpdate(!update);
		// navigate(`/admin/all/${str}`);
		
	};

	useEffect(() => {
		getData();
	}, [props.collection]);
	useEffect(()=>{
		getData();
	},[update]);

	return (
		<div className='container'>
			<div className='fluid-container mt-5 px-2'>
				<div className='mb-2 d-flex justify-content-between align-items-center'></div>
				<div className='table-responsive'>
					<table className='table table-responsive table-borderless'>
						<thead>
							<tr className='bg-light'>
								{props.collection !== "vouchers" && (
									<th scope='col' width='5%'></th>
								)}
								<th scope='col' width='5%'></th>
								{data.length &&
									Object.keys(data[0]).map((key, ind) => {
										return ind !== 0 ? (
											<th
												scope='col'
												width='5%'
												key={ind}
											>
												{key}
											</th>
										) : (
											""
										);
									})}
							</tr>
						</thead>
						<tbody>
							{data.map((val, ind) => {
								return (
									<tr key={ind}>
										{props.collection !== "vouchers" && (
											<th scope='row'>
												<Link
													to={`/admin/forms/${str.slice(0,str.length-1)}/${
														val._id
													}`}
													id='icon'
												>
													<svg
														id='pencil'
														xmlns='http://www.w3.org/2000/svg'
														height='5'
														width='5'
														viewBox='0 0 512 512'
													>
														<path d='M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z' />
													</svg>
												</Link>
											</th>
										)}
										{
											<th scope='row'>
												<button
													onClick={() => {
														handleDeleteRequest(
															val._id
														);
													}}
													id='icon'
												>
													<svg
														id='pencil'
														xmlns='http://www.w3.org/2000/svg'
														height='16'
														width='14'
														viewBox='0 0 448 512'
													>
														<path d='M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z' />
													</svg>
												</button>
											</th>
										}
										{Object.keys(val).map((key, index) => {
											return index !== 0 ? (
												<td
													className={`col`}
													data-label={key}
													key={index}
												>
													{val[key]}
													{/* {
														key==='countryID'?country:key==='stateID'?state?key==='cityID'?city:key==='storeID'?store:key==='supplierID'?supplier:"NaN":"":""} */}
												</td>
											) : (
												""
											);
										})}
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Table;
