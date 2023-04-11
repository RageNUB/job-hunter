import React from 'react';

const TitleText = ({children}) => {
    return (
        <div className='flex justify-between items-center bg-accent'>
            <img src="/assets/images/Vector.png" alt="" />
            <h1 className='text-3xl font-bold'>{children}</h1>
            <img src="/assets/images/Vector-1.png" alt="" />
        </div>
    );
};

export default TitleText;