import React from 'react';

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
        </tr>
    );
};

export default TableRow;