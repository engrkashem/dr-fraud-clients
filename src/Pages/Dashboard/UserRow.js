import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        // const url = `http://localhost:5000/user/admin/${email}`;
        const url = `https://damp-basin-02445.herokuapp.com/user/admin/${email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Sorry, You are not authorised to make an Admin');
                }
                return res.json();
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully ${email} made an Admin`);
                }

            })

    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-outline btn-ghost btn-xs">Make Admin</button>}</td>
            <td><button className="btn btn-outline btn-error btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;