import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div>
            <div className="hero row px-5">
                <div className="left col-md-12 col-lg-7">
                    <h1>One Step <br /> Closer To Your <br /> <span className='text-danger'>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn btn-danger'>Get Started</button>
                </div>
                <div className="right col-md-12 col-lg-5">
                    <img className='img-fluid' src="https://github.com/mdmahfuzrp/futurehub-img/blob/main/All%20Images/P3OLGJ1%20copy%201.png?raw=true" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;