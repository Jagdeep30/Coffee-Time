import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./tables.css";

const Table = (props) => {
	let str = props.collection;
	const [data, setData] = useState([]);

	const getData = async () => {
		// console.log("hello started");
		let result = await axios(
			`http://localhost:5000/api/v1/admin/${str}s`
		);
		// console.log(result.data.data);
		setData(result.data.data);
	};

	useEffect(() => {
		getData();
	},[props.collection]);

	return (
		<div className='container'>
			{/* <ul class='responsive-table'>
				<li class='table-header'>
					<div class='col col-1'>Job Id</div>
					<div class='col col-2'>Customer Name</div>
					<div class='col col-3'>Amount Due</div>
					<div class='col col-4'>Payment Status</div>
				</li>
				<li class='table-row'>
					<div class='col col-1' data-label='Job Id'>
						42235
					</div>
					<div class='col col-2' data-label='Customer Name'>
						John Doe
					</div>
					<div class='col col-3' data-label='Amount'>
						$350
					</div>
					<div class='col col-4' data-label='Payment Status'>
						Pending
					</div>
				</li>
			</ul> */}

			<ul className='responsive-table'>
				<li className='table-header'>
				<div className="col col-1"></div>
					{data.length && Object.keys(data[0]).map((key, ind) => {
						return (
							ind!==0?<div className={`col col-${ind + 1}`} key={ind}>{key}</div>:''
						);
					})}
				</li>
				{data.map((val, ind) => {
					return (
						<li className='table-row' key={ind}>
                            {props.collection!=='Voucher' && <Link to={`/admin/forms/${str.toLowerCase()}/${val._id}`} id="icon">
									<svg id='pencil' xmlns="http://www.w3.org/2000/svg" height="5" width="5" viewBox="0 0 512 512"><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>
									</Link>}
							{Object.keys(val).map((key, index) => {
								return (
									index!==0?
									<div
										className={`col col-${index + 1}`}
										data-label={key}
                                        key={index}
									>
										{val[key]}
									</div>
									:''
								);
							})}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Table;
