import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Header/Navigation';

const Root = () => {
    return (
        <div className=''>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;