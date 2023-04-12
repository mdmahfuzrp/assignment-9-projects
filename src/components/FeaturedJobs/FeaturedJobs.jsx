import React, { createContext, useEffect, useState } from 'react';
import SingleJob from '../SingleJob/SingleJob';
import './FeaturedJobs.css';
import JobDetails from '../JobDetails/JobDetails';

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    // console.log(featuredJobs);
    const [showStatus, setShowStatus] = useState(false);
    // console.log(showStatus);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => {
                if(showStatus === false){
                    const newData = data.slice(0, 4);
                    setFeaturedJobs(newData);
                }
                else{
                    setFeaturedJobs(data);
                }
            })
    }, [featuredJobs]);
    return (     
            <div className='feature-job-section p-5'>
                <h1>Featured <span className='text-danger'>Jobs</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='row gap-4 m-auto'>
                    {
                        featuredJobs.map(singleJob => <SingleJob
                            key={singleJob.id}
                            singleJob={singleJob}
                        ></SingleJob>)
                    }
                </div>
                <button className='btn btn-danger mt-4' onClick={()=> setShowStatus(!showStatus)}>{showStatus === true ? "See Less Jobs" : "See All Jobs"}</button>
            </div>
    );
};

export default FeaturedJobs;