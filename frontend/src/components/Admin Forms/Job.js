import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Job = (props) => {
	const [jobName, setJobName] = useState('');
	const [salary, setSalary] = useState('');

	const params = useParams();
	const id = params.id;
	let result = '';

	const resetForm = () => {
		setJobName('');
		setSalary('');
	  };

	const getData = async()=>{
		result = await axios.get(`http://localhost:5000/api/v1/admin/jobs/${id}`);

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
						<form action={`http://localhost:5000/api/v1/admin/jobs/${id}`} method='POST' className='form-horizontal clearfix'>
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