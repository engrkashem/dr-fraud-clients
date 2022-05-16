import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let errorMessage;
    if (error) {
        errorMessage = error?.message;
    }

    if (user) {
        console.log(user);
    }
    return (
        <div className=' flex h-screen justify-center items-center'>
            <div className="card w-96 lg:w-1/2 bg-base-100 shadow-xl">
                <div className="card-body items-center">
                    <h2 className="card-title">LOGIN</h2>

                    <div className="divider">OR</div>
                    <p className='text-rose-500'>{errorMessage}</p>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-accent uppercase">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;