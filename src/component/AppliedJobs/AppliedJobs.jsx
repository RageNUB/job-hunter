import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCart } from '../../utilities/fakeDB';
import TitleText from '../TitleText/TitleText';
import JobOverView from '../JobOverView/JobOverView';

const AppliedJobs = () => {
    const loaderData = useLoaderData();
    const storedData = getStoredCart()
    
    let newData = [];

    for(const id in storedData) {
        const exist = loaderData.filter(data => data.id == id)
        newData.push(exist[0])
    }
    console.log(newData)

    return (
        <div>
            <TitleText>Applied Jobs</TitleText>
            <div className='mx-20 mt-16'>
                {
                    newData.map(data => <JobOverView
                     key={data.id}
                     data={data}
                    ></JobOverView>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;