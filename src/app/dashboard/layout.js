import React from 'react';
import Sidebar from '../shared/Sidebar';

const DashboardLayout = ({children}) => {
    return (
        <div className='flex'>
            <Sidebar></Sidebar>
            <div className='w-10/12 text-center'>{children}</div>
        </div>
    );
};

export default DashboardLayout;