import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='bg-blue-500 px-8 py-4'>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;