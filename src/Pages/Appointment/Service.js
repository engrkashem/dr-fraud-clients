import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{slots.length
                    ? <span>{slots[0]}</span>
                    : <span className='text-rose-500'>No Schedule for this Day</span>}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available.</p>
                <div className="card-actions justify-center">
                    <label htmlFor="appointment-modal"
                        onClick={() => setTreatment(service)} disabled={slots.length === 0}
                        className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">Make Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;