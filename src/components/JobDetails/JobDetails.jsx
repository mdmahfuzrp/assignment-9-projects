import { Link, json, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faDollarSign, faLocationDot, faCalendarAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './JobDetails.css'
import { addToDb } from '../Utility/fakedb';


const JobDetails = () => {
    const { jobID } = useParams();
    const allJobs = useLoaderData();
    // Every single job in foundObject
    let foundObject = allJobs.find(obj => obj.id === parseInt(jobID));

    // Destructuring
    const { id, jobDescription, jobResponsibility, salary, phone, title, experience, email, address, eduRequire, } = foundObject;
    console.log('found-object', foundObject);

    // Move Back From One Page to Another Page
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <div className='pt-3' id='details-hero'>
                <div className="details-hero">
                    <h1 className='section-title'>Job Details</h1>
                    <Link id='go-back' onClick={handleGoBack}><span><FontAwesomeIcon icon={faArrowLeft} /></span>Go Back</Link>
                </div>
            </div>
            <div className='d-md-flex align-items-center justify-content-around px-4 pt-3 row'>
                <div className="left-info col-md-7">
                    <p className='first-p'><strong>Job Description:</strong> {jobDescription}</p>
                    <p><strong>Job Responsibility:</strong> {jobResponsibility}</p>
                    <div className='first-div'>
                        <strong>Educational Requirements:</strong>
                        <p>{eduRequire}</p>
                    </div>
                    <div>
                        <strong>Experience:</strong>
                        <p>{experience}</p>
                    </div>
                </div>
                <div className="right-info bg-light p-4 col-md-4">
                    <div className="job-details-info default">
                        <h1>Job Details</h1>
                        <div className='p-grp'>
                            <p><span><FontAwesomeIcon icon={faDollarSign} /></span><strong>Salary: </strong> {salary}</p>
                            <p><span><FontAwesomeIcon icon={faCalendarAlt} /></span><strong>Job Title: </strong>{title}</p>
                        </div>
                    </div>
                    <div className="contact-info default">
                        <h1>Contact Information</h1>
                        <div className='p-grp'>
                            <p><span><FontAwesomeIcon icon={faPhone} /></span><strong>Phone: </strong> {phone}</p>
                            <p><span><FontAwesomeIcon icon={faEnvelope} /></span><strong>Email: </strong> {email}</p>
                            <p><span><FontAwesomeIcon icon={faLocationDot} /></span><strong>Address: </strong> {address}</p>
                        </div>
                    </div>
                    <button className='btn btn-danger' onClick={() => addToDb(foundObject)}>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;