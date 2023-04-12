import React from 'react';
import './JobCategorys.css'

const JobCategory = ({jobCategory}) => {
    const {title, totalJobs, img} = jobCategory;
    return (
        <div id='job-category' className=' col-12 col-md-4 col-lg-3 bg-light'>
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{totalJobs}</p>
        </div>
    );
};

export default JobCategory;