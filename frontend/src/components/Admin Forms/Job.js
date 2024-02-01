import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const baseURL = "https://coffee-time-one.vercel.app/api/v1";

const Job = (props) => {
	const [jobName, setJobName] = useState('');
	const [salary, setSalary] = useState('');

	const navigate = useNavigate();

	const params = useParams();
	const id = params.id;
	let result = '';

	const resetForm = () => {
		setJobName('');
		setSalary('');
	  };

	const getData = async()=>{
		result = await axios.get(baseURL+`/admin/jobs/${id}`);

		setJobName(result.data.data.jobName);
		setSalary(result.data.data.salary);
		
	}

	const handleJobNameChange = (e)=>{
		// console.log(e);
		setJobName(e.target.value);
	}
	const handleSalaryChange = (e)=>{
		// console.log(e);
		setSalary(e.target.value);
	}

	const handleFormSubmission = async(e)=>{
		e.preventDefault();
		// console.log(e);

		let data = new FormData(e.target);
		// let info = {};
		// 	for(let entry of data.entries()){
		// 		info[entry[0]] = entry[1];
		// 	}

		let info = data;

		if(props.task==='Add'){
			
			let res = await axios.post(baseURL+`/admin/jobs`,info);
			// console.log(res);
		}
		else if(props.task==='Update'){
			// console.log(info);
			
			// let res = await axios.patch(`/api/v1/admin/employees/${id}`,info);
			// let res = axiosBackend.put(`/employees/${id}`,info);
			let res = await axios({
				method: 'put',
				url: baseURL+`/admin/jobs/${id}`,
				data: info
			});
			// console.log(res);
		}
		navigate('/admin/all/jobs');

		return;
	}

	useEffect(()=>{
		if(props.task==='Update'){
			getData();
		}
		else if(props.task === 'Add')resetForm();
	},[props.task]);
  return (
    <div className='admin-sign-form'>
			<div className='admin-form-bg'>
				<div className='container'>
					<div className='admin-form-container'>
						<div className='admin-formHead'>
							<h3 className='admin-title'>{props.task} Job</h3>
						</div>
						<form onSubmit={handleFormSubmission} encType='multipart/form-data' className='form-horizontal clearfix'>
						<div className="input-group">
								<label htmlFor="jobname" className="form-label">Job Name:</label>
							<div className='form-group'>
								<input
									type='text'
									id='jobname'
									name='jobName'
									className='form-control'
									placeholder='Job Name'
									value={jobName}
										onChange={handleJobNameChange}
									required
								/>
							</div>
							</div>
							<div className="input-group">
								<label htmlFor="salary" className="form-label">Salary:</label>
							<div className='form-group'>
								<input
									type='number'
									id='salary'
									name='salary'
									className='form-control'
									placeholder='Salary'
									value={salary}
										onChange={handleSalaryChange}
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


Job.propTypes = {
	task:PropTypes.string.isRequired
}

export default Job;