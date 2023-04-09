import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Main = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h2>Main Page</h2>
        </div>
    );
};

export default Main;