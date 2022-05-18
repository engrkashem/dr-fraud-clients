import React from 'react';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../../hooks/useToken';

const Register = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, uError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const [token] = useToken(user || gUser);

    if (loading || gLoading || updating) {
        return <button className="btn loading">loading</button>;
    }

    let errorMessage;
    if (error || gError || uError) {
        errorMessage = <p className='text-rose-500'>{error?.message || gError?.message || uError?.message}</p>;
    }

    if (token) {
        // console.log(user);
        navigate('/appointment');
    }

    const onSubmit = async data => {
        // console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });

    };

    return (
        <div className=' flex h-screen justify-center items-center'>
            <div className="card w-96 lg:w-1/2 bg-base-100 shadow-xl">
                <div className="card-body items-center">
                    <h2 className="card-title">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full ">

                        <div className="form-control ">
                            <label className="label">
                                <span
                                    className="label-text">Name
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name" className="input input-bordered w-full "
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
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
                                    className="label-text">Password
                                </span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password" className="input input-bordered w-full"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    pattern: {
                                        value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                        message: 'Password must contains at least one upper case, one lower case, one digit, one special character and minimum length 8 characters '
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span
                                    className="label-text-alt text-rose-500">{errors.password.message}
                                </span>}
                                {errors.password?.type === 'pattern' && <span
                                    className="label-text-alt text-rose-500">{errors.password.message}
                                </span>}
                            </label>
                        </div>
                        {/* 
                        At least one upper case English letter, (?=.*?[A-Z])
                        At least one lower case English letter, (?=.*?[a-z])
                        At least one digit, (?=.*?[0-9])
                        At least one special character, (?=.*?[#?!@$%^&*-])
                        Minimum eight in length .{8,} (with the anchors) 
                        */}
                        <input className='btn btn-outline btn-accent w-1/2 mx-auto block' type="submit" value='SIGN UP' />
                    </form>
                    {errorMessage}
                    <p className=' font-semibold mt-5'>Already User to Dr FAUST? <Link to={'/login'} className=' text-secondary'> Please Login</Link></p>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-accent uppercase">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;