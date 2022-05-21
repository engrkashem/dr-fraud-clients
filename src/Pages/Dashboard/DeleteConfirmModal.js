import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ doctorDelete, refetch, setDoctorDelete }) => {
    const { name, email } = doctorDelete;

    const deleteDoctor = () => {
        // const url = `http://localhost:5000/doctor/${email}`;
        const url = `https://damp-basin-02445.herokuapp.com/doctor/${email}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`${name} is deleted from server successfully`);
                    setDoctorDelete(null);
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-rose-500">Are You Sure you Want to Delete {name}</h3>
                    <div class="modal-action">
                        <button onClick={deleteDoctor} className="btn text-white btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;