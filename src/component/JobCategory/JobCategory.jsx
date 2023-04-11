import React, { useEffect, useState } from 'react';
import JobList from '../JobList/JobList';

const JobCategory = () => {
    const [jobList, setJobList] = useState([])

    useEffect(() => {
        fetch("/jobCategory.json")
        .then(res => res.json())
        .then(data => setJobList(data))
    },[])
    
    return (
        <div className='mt-16'>
            <div className='text-center'>
            <h1 className='text-5xl font-bold mb-5'>Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='lg:flex justify-between px-20 mt-8'>
                {
                    jobList.map(job => <JobList
                    key={job.id}
                    job={job}
                    ></JobList>)
                }
            </div>
        </div>
    );
};

export default JobCategory;