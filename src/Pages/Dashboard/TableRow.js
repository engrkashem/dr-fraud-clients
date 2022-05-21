import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = ({ booking, index }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{booking?.patientName
            }</td>
            <td>{booking?.date}</td>
            <td>{booking?.treatmentName
            }</td>
            <td>{booking?.timeSlot}</td>
            <td>
                {(booking?.price && !booking.paid) && <Link to={`/dashboard/payment/${booking._id}`}>
                    <button className='btn btn-xs btn-success'>Pay</button>
                </Link>}
                {(booking?.price && booking.paid) &&
                    <span className='text-success'>Paid</span>}
            </td>
        </tr>
    );
};

export default TableRow;