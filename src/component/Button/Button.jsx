import React, { Children } from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button className='text-white uppercase font-medium bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-3 rounded-lg hover:from-purple-500 hover:to-indigo-500'>{children}</button>
        </div>
    );
};

export default Button;