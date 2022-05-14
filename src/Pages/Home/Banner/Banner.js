import React from 'react';
import chair from '../../../assets/images/chair.png';
import GradientButton from '../../Shares/GradientButton/GradientButton';
// import bg from '../../../assets/images/bg.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">YOUR ENDING STARTS HERE !!</h1>
                    <p className="py-6">Provide every healthcare service at one place. Several Doctors of multi discipline availabe here. </p>
                    <GradientButton>Get Started</GradientButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;