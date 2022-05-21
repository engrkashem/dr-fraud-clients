import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [doctorDelete, setDoctorDelete] = useState(null);
    // const url = `http://localhost:5000/doctor`;
    const url = `https://damp-basin-02445.herokuapp.com/doctor`;
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => {
        return fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    });

    if (isLoading) {
        return <button className="btn loading">loading</button>;
    }

    return (
        <div>
            <h2 className=' text-secondary text-3xl my-2'>Manage Doctors: {doctors.length} </h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                                setDoctorDelete={setDoctorDelete}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                doctorDelete && <DeleteConfirmModal
                    doctorDelete={doctorDelete}
                    refetch={refetch}
                    setDoctorDelete={setDoctorDelete}
                />
            }
        </div>
    );
};

export default ManageDoctors;