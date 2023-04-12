import React, { useState } from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import JobCategory from '../JobCategorys/JobCategorys';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    const allJobCategorys = useLoaderData();

    return (
        <div className=''>
            <Hero></Hero>
            <div className="job-category text-center p-5">

                <h1>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className="row gap-3 grid justify-content-center">
                    {
                        allJobCategorys.map(jobCategory => <JobCategory
                            key={jobCategory.id}
                            jobCategory={jobCategory}
                        ></JobCategory>)
                    }
                </div>
            </div>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;