import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
        <li tabIndex="0">
            <a className="justify-between">
                Admin
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="p-2">
                <li className='hover-bordered'><a>Submenu 1</a></li>
                <li className='hover-bordered'><a>Submenu 2</a></li>
            </ul>
        </li>
        <li><NavLink to={'/'} className={({ isActive }) =>
            isActive ? 'bg-primary text-white' : ''
        }>HOME</NavLink></li>
        <li><NavLink to={'/about'} className={({ isActive }) =>
            isActive ? 'bg-primary text-white' : ''
        }>About</NavLink></li>
        <li><NavLink to={'appointment'} className={({ isActive }) =>
            isActive ? 'bg-primary text-white' : ''
        }>APPOINTMENT</NavLink></li>
        <li><NavLink to={'reviews'} className={({ isActive }) =>
            isActive ? 'bg-primary text-white' : ''
        }>REVIEWS</NavLink></li>
        <li><NavLink to={'contact-us'} className={({ isActive }) =>
            isActive ? 'bg-primary text-white' : ''
        }>CONTACT</NavLink></li>
        <li> <Link to={'/login'} className=" bg-neutral text-white ">LOGIN</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 md:px-16">
            <div className="navbar-start font-semibold">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">DOCTOR FAUST</Link>
            </div>
            <div className="navbar-end hidden lg:flex font-semibold">
                <ul className="menu menu-horizontal p-0">
                    {links}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;