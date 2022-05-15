import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import GradientButton from '../../Shares/GradientButton/GradientButton';

const DentalCard = () => {
    return (
        <div className="card lg:card-side shadow-xl mb-20">
            <figure className='w-1/2'>
                <img className='h-[458px] w-full' src={treatment} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-4xl font-bold">Exceptional Dental Care on Your Stones Throw</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-start">
                    <GradientButton>Get Started</GradientButton>
                </div>
            </div>
        </div>
    );
};

export default DentalCard;