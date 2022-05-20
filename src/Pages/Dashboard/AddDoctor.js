import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const url = `http://localhost:5000/services`;
    const { data: services, isLoading } = useQuery('services', () => fetch(url).then(res => res.json()))
    // console.log(services)

    const imageApiKey = `b5ab4d159b3b824c0b81084910924e97`;

    if (isLoading) {
        return <button className="btn loading">loading</button>;

    }

    /**
     * 3 ways to store images (free open public storage is ok for practise problem).
     * 1. third party storage system.
     * 2. Own storage in own server (file system).
     * 3. Database: like mongodb.
     * 
     * YUP: to validate file (file can not be validate as like email & password). search: YUP file validate  for react hook form.
    */

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageApiKey}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        img: img
                    };
                    //send to yor data base
                    const url = `http://localhost:5000/doctor`;
                    fetch(url, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(feedback => {
                            if (feedback.result.insertedId) {
                                toast.success('Doctors added Successfully');
                                reset();
                            }
                            else {
                                toast.error('Failed to add the Doctor');
                            }
                        })
                }
            })
    };

    return (
        <div>
            <h2 className=' text-secondary text-3xl my-2'>Add a new Doctor</h2>
            <div className=' flex h-screen justify-center items-center'>
                <div className="card w-96 lg:w-1/2 bg-base-100 shadow-xl">
                    <div className="card-body items-center">
                        <h2 className="card-title">ADD A DOCTORT</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full ">

                            <div className="form-control ">
                                <label className="label">
                                    <span
                                        className="label-text">Name
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Doctor Name" className="input input-bordered w-full "
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Doctor Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span
                                        className="label-text-alt text-rose-500">{errors.name.message}
                                    </span>}
                                </label>
                            </div>

                            <div className="form-control ">
                                <label className="label">
                                    <span
                                        className="label-text">Email
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email" className="input input-bordered w-full "
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                            message: 'Enter a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span
                                        className="label-text-alt text-rose-500">{errors.email.message}
                                    </span>}
                                    {errors.email?.type === 'pattern' && <span
                                        className="label-text-alt text-rose-500">{errors.email.message}
                                    </span>}
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span
                                        className="label-text">Field of Specialization
                                    </span>
                                </label>
                                <select
                                    className="select select-bordered w-full"
                                    {...register("speciality", {
                                        required: {
                                            value: true,
                                            message: 'Specialization Field is Required'
                                        }
                                    })}
                                    defaultValue='DEFAULT'
                                >
                                    <option disabled value={'DEFAULT'}>Pick one</option>
                                    {
                                        services?.map(s => <option
                                            key={s._id}
                                            value={s.name}
                                        >{s.name}</option>)
                                    }
                                </select>
                                <label className="label">
                                    {errors.speciality?.type === 'required' && <span
                                        className="label-text-alt text-rose-500">{errors.speciality.message}
                                    </span>}
                                </label>

                            </div>

                            <div className="form-control ">
                                <label className="label">
                                    <span
                                        className="label-text">Photo
                                    </span>
                                </label>
                                <input
                                    type="file"
                                    className="input input-bordered w-full "
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: 'Photo is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.image?.type === 'required' && <span
                                        className="label-text-alt text-rose-500">{errors.image.message}
                                    </span>}
                                </label>
                            </div>

                            <input className='btn btn-outline btn-accent w-1/2 mx-auto block' type="submit" value='ADD' />
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default AddDoctor;