import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import GradientButton from '../../Shares/GradientButton/GradientButton';

const ContactSec = () => {
    return (
        <section className='mt-24'>
            <div className="hero min-h-fit" style={{ background: `url(${appointment})` }}>
                <div className="hero-content text-center text-white py-8">
                    <div className="max-w-md">
                        <p className="mb-5 text-secondary text-xl font-semibold">Contact Us</p>
                        <h1 className="mb-10 text-3xl font-semibold">Stay Connected with Us</h1>
                        <input type="email" placeholder="Email Address" className="input input-bordered input-sm w-full max-w-xs" />
                        <input type="text" placeholder="Subject" className="input input-bordered input-sm w-full max-w-xs my-4" />
                        <textarea type="text" placeholder="Your Message" className="input input-bordered h-24 w-full max-w-xs mb-8" />
                        <br />
                        <GradientButton>submit</GradientButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSec;