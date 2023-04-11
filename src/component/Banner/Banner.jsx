import React from 'react';
import Button from '../Button/Button';

const Banner = () => {
    return (
        <div className='lg:flex justify-between items-start bg-accent px-5 pt-4 lg:pt-0 lg:px-20 '>
            <div className='my-auto text-start'>
                <h1 className='text-5xl lg:text-7xl font-bold'>One Step <br />Closer To Your <br /> <span className='text-primary'>Dream Job</span></h1>
                <p className='my-6 text-secondary'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn btn-primary text-white'>Get Started</button>
                {/* <Button>Get Started</Button> */}
            </div>
            <div>
                <img src="./assets/images/person.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;