import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open, setOpen]= useState(false);
    const routes = [
        {id:1, name:'Home', link:'/Home'},
        {id:2, name:'Shop', link:'/shop'},
        {id:3, name:'Deals', link:'/deals'},
        {id:4, name:'Coupons', link:'/coupons'},
        {id:5, name:'Contact', link:'/contact'},
    ];

    return (
        <nav>
            <div onClick={()=> setOpen(!open)} className='w-8 h-8 md:hidden' >
                {open ? <XIcon></XIcon>: <MenuIcon></MenuIcon>}
            </div> 
            <ul className={`md:flex justify-center absolute duration-500 ease-in ${open? 'top-10':'top-[2px]'} `}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
                
        </nav>
    );
};

export default Navbar;