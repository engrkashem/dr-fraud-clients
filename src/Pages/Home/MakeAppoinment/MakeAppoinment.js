import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';
import GradientButton from '../../Shares/GradientButton/GradientButton';

const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='md:flex justify-center items-center text-white mt-[150px]'>
            <div className='flex-1'>
                <img className='mt-[-100px] hidden lg:block' src={doctor} alt="" />
            </div>
            <div className='flex-1 pl-5'>
                <h3 className='text-xl font-semibold text-secondary text-center'>Appointment</h3>
                <h2 className='text-4xl font-bold my-5 text-center'>Make an Appointment Today</h2>
                <p className='mb-5'>Practising over 12 years in this field. Any dental problem including dental cancer treatment available here.</p>
                <GradientButton>get started</GradientButton>
            </div>
        </section>
    );
};

export default MakeAppoinment;