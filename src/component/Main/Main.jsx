import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';

const Main = () => {
    const data = useLoaderData();
    // console.log(data)
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
        </div>
    );
};

export default Main;