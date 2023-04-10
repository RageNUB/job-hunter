import React from 'react';
import "./TitleText.css"

const TitleText = ({children}) => {
    return (
        <div className='flex justify-between items-center bg-accent'>
            <img src="../../../public/assets/images/Vector.png" alt="" />
            <h1 className='text-3xl font-bold'>{children}</h1>
            <img src="../../../public/assets/images/Vector-1.png" alt="" />
        </div>
    );
};

export default TitleText;