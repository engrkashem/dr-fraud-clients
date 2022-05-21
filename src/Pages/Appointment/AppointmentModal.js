import { success } from 'daisyui/src/colors';
import { format } from 'date-fns';
import React from 'react';
import { toast } from 'react-toastify';

const AppointmentModal = ({ treatment, date, setTreatment, user, formatedDate, refetch }) => {
    const { _id, name, slots, price } = treatment;
    const { displayName, email } = user;
    // console.log(displayName, email)

    const handleAppointment = e => {
        e.preventDefault();
        const timeSlot = e.target.slot.value;
        // console.log(_id, timeSlot);
        const bookingInfo = {
            treatmentId: _id,
            treatmentName: name,
            date: formatedDate,
            timeSlot,
            price,
            patientEmail: email,
            patientName: displayName,
            phone: e.target.phone.value
        }
        // send bppkin to server
        // const url = `http://localhost:5000/booking`;
        const url = `https://damp-basin-02445.herokuapp.com/booking`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo),
        })
            .then(res => res.json())
            .then(data => {
                if (data?.success) {
                    toast(`Your Appointment is Confirmed at ${timeSlot} on ${formatedDate}`);
                }
                else {
                    toast.error(`You have already appointment in ${data?.bookingInfoDoc?.date} at ${data?.bookingInfoDoc?.timeSlot}`)
                }
                //update ui instantly using react query feature.
                refetch();
                //to close modal
                setTreatment(null);
            })
    }
    return (
        <div>
            {success}
            <input type="checkbox" id="appointment-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="appointment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary text-center">Appointment for {name}</h3>

                    <form onSubmit={handleAppointment} className='flex flex-col items-center gap-3 mt-10'>
                        <input type="text" value={format(date, 'PP')} disabled className="input input-bordered input-secondary w-full max-w-xs mx-auto" />
                        <select name='slot' defaultValue={'default'} className="select select-secondary w-full max-w-xs">
                            <option disabled value={'default'}>Pick your Time Slots</option>

                            {slots.map((slot, index) => <option
                                key={index}
                                value={slot}
                            >{slot}</option>)}
                        </select>
                        <input name='name' type="text" disabled value={displayName || ''} className="input input-bordered input-secondary w-full max-w-xs" />
                        <input name='phone' type="text" placeholder="Phone" className="input input-bordered input-secondary w-full max-w-xs" />
                        <input name='email' type="email" disabled value={email || ''} className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="submit" value="Confirm Appointment" className="btn btn-secondary text-white max-w-xs" />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;