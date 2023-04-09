import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Main = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Main;