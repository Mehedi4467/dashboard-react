import React from 'react';
import { HomeIcon, UserCircleIcon, MailIcon, TrendingUpIcon, CurrencyBangladeshiIcon } from '@heroicons/react/solid';

const Menu = () => {
    return (
        <div className=''>
            <div className='shadow-lg p-10 rounded-md'>
                <div className='shadow-md rounded-full p-3 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer'>
                    <HomeIcon className="h-7 w-7  text-blue-400"></HomeIcon>
                    <h2 className='text-blue-500'>Home</h2>
                </div>
                <div className='shadow-md rounded-full p-3 mt-5 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer'>
                    <UserCircleIcon className="h-7 w-7  text-blue-400"></UserCircleIcon>
                    <h2 className='text-blue-500'>Profile</h2>
                </div>
                <div className='shadow-md rounded-full p-3 mt-5 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer'>
                    <MailIcon className="h-7 w-7  text-blue-400"></MailIcon>
                    <h2 className='text-blue-500'>Email</h2>
                </div>
                <div className='shadow-md rounded-full p-3 mt-5 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer'>
                    <TrendingUpIcon className="h-7 w-7  text-blue-400"></TrendingUpIcon>
                    <h2 className='text-blue-500'>Analysis</h2>
                </div>
                <div className='shadow-md rounded-full p-3 mt-5 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer'>
                    <CurrencyBangladeshiIcon className="h-7 w-7  text-blue-400"></CurrencyBangladeshiIcon>
                    <h2 className='text-blue-500'>Balance</h2>
                </div>
                <div className='shadow-md rounded-full p-3 mt-5 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer'>
                    <CurrencyBangladeshiIcon className="h-7 w-7  text-blue-400"></CurrencyBangladeshiIcon>
                    <h2 className='text-blue-500'>Balance</h2>
                </div>
            </div>
        </div>
    );
};

export default Menu;