import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L1o5DIiUKs0u5qlbv5UhAGcsaMKtzoogSnWRrcHf1xcvrrwWgGb8Fp5Vfr28hkGF3huBN6znChJLPE6r0cz4lye00lodgPHIu');

const Payment = () => {
    const { id } = useParams();
    // const url = `http://localhost:5000/booking/${id}`;
    const url = `https://damp-basin-02445.herokuapp.com/booking/${id}`;
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <button className="btn loading">loading</button>;
    }
    const { treatmentName, date, timeSlot, price, patientName } = appointment;

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse w-full h-1/2">
                <div className="card w-1/2 h-full max-w-md bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className=' text-secondary text-xl'>Dear Mr./Mrs. {patientName}</h2>
                        <h2 className="card-title"><small>Please Pay for</small> {treatmentName}</h2>
                        <p>Your Appointment on <span className='text-primary font-semibold'>{date}</span> at <span className='text-primary font-semibold'>{timeSlot}</span></p>
                        <h6 className=' font-semibold'>Please Pay $ {price}</h6>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-1/2 h-full max-w-md shadow-2xl bg-base-100">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm
                                appointment={appointment}
                            />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;