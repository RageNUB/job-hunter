import React from 'react';
import JobList from '../JobList/JobList';

const JobCategory = () => {
    const jobList = [
        {id:1, image:"./assets/Icons/accounts.png", title:"Account & Finance", vacancy:"300 Jobs Available"},
        {id:2, image:"./assets/Icons/business.png", title:"Creative Design", vacancy:"100+ Jobs Available"},
        {id:3, image:"./assets/Icons/chip.png", title:"Marketing & Sales", vacancy:"150 Jobs Available"},
        {id:4, image:"./assets/Icons/social-media.png", title:"Engineering Job", vacancy:"224 Jobs Available"}
    ]
    // console.log(jobList)
    return (
        <div className='mt-16'>
            <div className='text-center'>
            <h1 className='text-5xl font-bold mb-5'>Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='flex justify-between px-20 mt-8'>
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