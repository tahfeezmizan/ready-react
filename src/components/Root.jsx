import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Header/Navigation';

const Root = () => {
    return (
        <div className='w-full md:w-8/12 mx-auto text-center'>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;