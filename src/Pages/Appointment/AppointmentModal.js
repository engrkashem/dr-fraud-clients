import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const handleAppointment = e => {
        e.preventDefault();
        const timeSlot = e.target.slot.value;
        console.log(_id, timeSlot);
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="appointment-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="appointment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary text-center">Appointment for {name}</h3>

                    <form onSubmit={handleAppointment} className='flex flex-col items-center gap-3 mt-10'>
                        <input type="text" value={format(date, 'PP')} disabled className="input input-bordered input-secondary w-full max-w-xs mx-auto" />
                        <select name='slot' defaultValue={'default'} className="select select-secondary w-full max-w-xs">
                            <option disabled value={'default'}>Pick your Time Slots</option>

                            {slots.map(slot => <option key={slot} value={slot}>{slot}</option>)}
                        </select>
                        <input name='name' type="text" placeholder="Name" className="input input-bordered input-secondary w-full max-w-xs" />
                        <input name='phone' type="text" placeholder="Phone" className="input input-bordered input-secondary w-full max-w-xs" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="submit" value="Confirm Appointment" className="btn btn-secondary text-white max-w-xs" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;