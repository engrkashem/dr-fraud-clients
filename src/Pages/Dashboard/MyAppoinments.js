import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';

const MyAppoinments = () => {
    const [user] = useAuthState(auth);

    // const url = `http://localhost:5000/booking?patient=${user?.email}`;
    const url = `https://damp-basin-02445.herokuapp.com/booking?patient=${user?.email}`;

    //react query is used to load data
    const { data: bookings, isLoading } = useQuery(['availableSlots', user], () => fetch(url).then(res => res.json()))

    if (isLoading) {
        return <button className="btn loading">loading</button>;
    }

    return (
        <div>
            <h2 className=' text-secondary text-3xl my-2'>My Appoinments: {bookings.length}</h2>
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
                            bookings.map((b, index) => <tr
                                key={b._id}
                            >
                                <th>{index + 1}</th>
                                <td>{b.patientName
                                }</td>
                                <td>{b.date}</td>
                                <td>{b.treatmentName
                                }</td>
                                <td>{b.timeSlot}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinments;