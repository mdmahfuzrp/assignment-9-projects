import { faArrowLeft, faDollarSign, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AppliedJobs.css'
import { getLocalStorage } from '../Utility/fakedb';
import AppliedJobsDetails from '../AppliedJobsDetails/AppliedJobsDetails';

const AppliedJobs = () => {
    
    let getAppliedJobs = getLocalStorage();
    console.log(getAppliedJobs);
    const [reload, setReload] = useState([]);

    // // Remote Filtering
    // const getRemoteJobs = () => {
    //     const remoteJobs = getAppliedJobs.filter(job => job.workSpace !== 'Onsite');
    //     localStorage.setItem('applied-job', JSON.stringify(remoteJobs));
    //     setReload(!reload);
    // }

    // // Onsite Filtering
    // const getOnsiteJobs = () => {
    //     const remoteJobs = getAppliedJobs.filter(job => job.workSpace !== 'Remote');
    //     localStorage.setItem('applied-job', JSON.stringify(remoteJobs));
    //     setReload(!reload);
    // }

    // Move Back From One Page to Another Page
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    }

    const [data, setData] = useState(getAppliedJobs || []);
    console.log('data: ', data);
    const handleChange = (item) =>{
        console.log('item: ', item);
        if(data){
            const storedCart = getLocalStorage();
            console.log('storeddata', storedCart);
            if(item === "Onsite" || item === "Remote"){
                const newArray = storedCart.filter((it) => it.workSpace === item);
                setData(newArray)
            }
            else{
                setData(getAppliedJobs)
            }
        }
        else{
            
        }
    }

    return (
        <div>
            <div className='pt-3' id='details-hero'>
                <div className="details-hero">
                    <h1 className='section-title'>Applied Jobs</h1>
                    <Link id='go-back' onClick={handleGoBack}><span><FontAwesomeIcon icon={faArrowLeft} /></span>Go Back</Link>
                </div>
            </div>

            <div>
            <div style={{width: "10rem"}} className='ms-auto mt-3'>
                <select
                    onChange={(e) => {
                        handleChange(e.target.value);
                    }}
                    className='from-select from-select-lg mb-3' id='filter-btn'
                    aria-label='.from-select-lg example'
                >
                    <option className='pointer' defaultValue>Filter By</option>
                    <option className='pointer' value="Onsite">Onsite</option>
                    <option className='pointer' value="Remote">Remote</option>
                    <option className='pointer' value="All Job">Show All</option>
                </select>
            </div>
                {
                    data.map(appliedJob => <AppliedJobsDetails
                        key={appliedJob.id}
                        appliedJob={appliedJob}
                    ></AppliedJobsDetails>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;