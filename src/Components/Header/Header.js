import React, { useState } from 'react';
import profile from '../../images/profile.jpg';
import { MenuAlt1Icon, BellIcon, CogIcon, SearchIcon, XIcon } from '@heroicons/react/solid';

import Menu from './Menu/Menu';


const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [open, setOpen] = useState(false);
    return (
        <div>
            <header className='shadow-lg py-4 px-5 md:px-0 sticky top-0 bg-white z-50'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-5 relative justify-around items-center h-10'>
                        <div>
                            <div onClick={() => setToggle(!toggle)} className="w-1/4 cursor-pointer">
                                {toggle ? <XIcon className="h-6 w-6 text-blue-500" /> : <MenuAlt1Icon className="h-6 w-6 text-blue-500" />}

                            </div>
                        </div>
                        <div className='col-span-2 md:col-span-3 flex justify-end md:mr-5'>

                            <div className='relative md:w-2/4'>
                                <input type="text" placeholder='Search.....' className='w-full h-10 outline-none px-5 text-blue-300 border-solid border-2 border-indigo-300 rounded-full ' />
                                <SearchIcon className='h-5 w-5 absolute bottom-1/4 top-1/4 text-blue-200 hover:text-blue-500 cursor-pointer right-4'></SearchIcon>
                            </div>

                        </div>
                        <div className='col-span-2 md:col-span-1'>
                            <div className='flex justify-around items-center'>
                                <div className='relative'>
                                    <BellIcon className='h-6 w-6 text-blue-500'></BellIcon>
                                    <div className='absolute top-[-10px] right-[-10px]'>
                                        <p className=' bg-blue-400 rounded-full flex justify-center items-center text-white h-4 w-4 text-xs'>1</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={profile} alt="Md.Mehedi Hassan" className='rounded-full border-2 border-solid border-indigo-300' width='40' height='40' />
                                    <div className='relative' >
                                        <span className="flex h-3 w-3 absolute top-[-46px] right-0">
                                            <span className="animate-ping absolute inline-flex h-3 w-3  rounded-full bg-sky-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                        </span>
                                    </div>
                                </div>
                                <CogIcon onClick={() => setOpen(!open)} className=' animate-spin h-6 w-6 text-blue-500 animation cursor-pointer'></CogIcon>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className={`absolute ease-in duration-500 bg-inherit ${toggle ? 'left-0' : 'left-[-200px]'}`}>
                <Menu></Menu>
            </div>

            <div className={` absolute duration-500 ease-out rounded-lg p-5 right-0 shadow-lg z-0 ${open ? 'top-20' : 'top-[-250px]'}`}>
                <h2>Coming Soon....</h2>
            </div>

        </div>

    );
};

export default Header;