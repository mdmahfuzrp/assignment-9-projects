import React, { createContext } from 'react';
import './SingleJob.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import JobDetails from '../JobDetails/JobDetails';

const SingleJob = ({singleJob}) => {
    const {id, logo, jobTitle, company, workSpace, jobStatus, address, salary} = singleJob;
    return (
            <div id='singleJob' className='col-12 col-md-5 border rounded p-4'>
                <img className='img-fluid' src={logo} alt="" />
                <h3>{jobTitle}</h3>
                <p>{company}</p>
                <div className='button-grp'>
                    <button className='me-3'>{workSpace}</button>
                    <button>{jobStatus}</button>
                </div>
                <div className='p-grp'>
                    <p><span><FontAwesomeIcon icon={faLocationDot} /></span>{address}</p>
                    <p><span><FontAwesomeIcon icon={faDollarSign} /></span>Salary : {salary}</p>
                </div>
                <Link className='btn btn-danger' to={`/job-details/${id}`}>View Details</Link>
            </div>
    );
};

export default SingleJob;