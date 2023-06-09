import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";

export default function navbar() {
    let Links = [       
        { name: "MRU", link: "/" },
        { name: "MRUA", link: "/mrua" },

    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7  dark:bg-slate-800  dark:text-white'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
                                 text-gray-800  dark:bg-slate-800  dark:text-white'>
                    FISICA 1
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close' : 'menu-outline'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}  dark:bg-slate-800  dark:text-white`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7  dark:bg-slate-800  dark:text-white'>
                                <Link to={link.link} className='text-gray-800 hover:text-gray-400 duration-500  dark:bg-slate-800  dark:text-white'>{link.name}</Link>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}
