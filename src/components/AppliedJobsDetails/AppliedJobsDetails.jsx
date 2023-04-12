import React, { useState } from 'react';
import { faArrowLeft, faDollarSign, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const AppliedJobsDetails = ({appliedJob}) => {
    const {company, logo, jobTitle, address, salary, workSpace, jobStatus} = appliedJob;
    
    return (
        <div>
            <div id='applied-singleJob' className='d-flex py-4'>
                <div id='applied-company-img'>
                    <img className='img-fluid' src={logo} alt="" />
                </div>
                <div id='applied-mid-area'>
                    <h3>{jobTitle} asdf</h3>
                    <p>{company}</p>
                    <div className='applied-button-grp'>
                        <button className='me-3'>{workSpace}</button>
                        <button>{jobStatus}</button>
                    </div>
                    <div className='applied-p-grp d-flex'>
                        <p><span className='me-1'><FontAwesomeIcon className='text-danger' icon={faLocationDot} /></span> {address}</p>
                        <p><span className='me-1 ms-3'><FontAwesomeIcon className='text-danger' icon={faDollarSign} /></span>Salary: {salary}</p>
                    </div>
                </div>
                <Link className='btn btn-danger'>View Details</Link>
            </div>
        </div>
    );
};

export default AppliedJobsDetails;