import React from 'react';

const JobList = ({job}) => {
    const {title, image, vacancy} = job;
    return (
        <div className='bg-accent w-80 h-60 rounded-lg ps-10 pt-10'>
            <img className='p-3 bg-gray-200 rounded-lg' src={image} alt="" />
            <h2 className='pt-8 pb-2 text-xl font-bold'>{title}</h2>
            <p className='text-secondary'>{vacancy}</p>
        </div>
    );
};

export default JobList;