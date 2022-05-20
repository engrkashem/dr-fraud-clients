import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar-left" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* <!-- Page content here --> */}
                <h2 className=' sm:text-4xl text-3xl text-primary font-semibold'>Explore Your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar-left" className="drawer-overlay"></label>
                <ul tabIndex="1" className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to={'/dashboard'}>MY APPOINMENT</Link></li>
                    <li><Link to={'/dashboard/my-review'}>MY REVIEW</Link></li>
                    <li className=' uppercase'><Link to={'/dashboard/history'}>Treatment History</Link></li>
                    {admin && <>
                        <li className=' uppercase'><Link to={'/dashboard/users'}>All Users</Link></li>
                        <li className=' uppercase'><Link to={'/dashboard/add-doctor'}>Add Doctor</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;