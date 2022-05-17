import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
    const [user] = useAuthState(auth);


    const LogOut = () => {
        signOut(auth)
    }

    const links = <>
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
        {user ?
            <>
                <li>
                    <Link to={'/dashboard'} className={({ isActive }) =>
                        isActive ? 'bg-primary text-white' : ''
                    }>DASHBOARD</Link>
                </li>
                <li>
                    <Link onClick={LogOut} to={'/login'} className=" bg-neutral text-white w-28">SIGN OUT</Link>
                </li>
            </> :
            <li><Link to={'/login'} className=" bg-neutral text-white ">LOGIN</Link></li>
        }
    </>
    return (
        <div className="navbar bg-base-100 ">
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
            <div className="navbar-center hidden lg:flex font-semibold">
                <ul className="menu menu-horizontal p-0">
                    {links}
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <label
                    htmlFor="dashboard-sidebar-left"
                    tabIndex="1"
                    className="btn btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </label>
            </div>

        </div>
    );
};

export default Navbar;