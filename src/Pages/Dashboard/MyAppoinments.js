import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import TableRow from './TableRow';

const MyAppoinments = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const url = `http://localhost:5000/booking?patient=${user?.email}`;
    // const url = `https://damp-basin-02445.herokuapp.com/booking?patient=${user?.email}`;

    //react query is used to load data
    const { data: bookings, isLoading } = useQuery(['availableSlots', user], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => {
        console.log('res: ', res);
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
        }
        return res.json();
    }))

    if (isLoading) {
        return <button className="btn loading">loading</button>;
    }

    return (
        <div>
            <h2 className=' text-secondary text-3xl my-2'>My Appoinments: {bookings?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th className=' text-center'>Name</th>
                            <th className=' text-center'>Date</th>
                            <th className=' text-center'>Treatment</th>
                            <th className=' text-center'>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, index) => <TableRow
                                key={booking._id}
                                booking={booking}
                                index={index}
                            ></TableRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinments;