import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';

const Banner = ({ children }) => {
    return (
        <div style={
            {
                background: `url(${bg})`,
                backgroundSize: 'cover'
            }
        }
            className="hero h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='w-1/2'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Banner;