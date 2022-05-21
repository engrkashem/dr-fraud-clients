import React from 'react';

const DoctorRow = ({ doctor, index, setDoctorDelete }) => {
    const { name, speciality, img } = doctor;


    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-8 mask mask-hexagon  ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td>
                <label onClick={() => setDoctorDelete(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-outline btn-error">Delete</label>
            </td>
        </tr >
    );
};

export default DoctorRow;