import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ appointment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [txId, setTxId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const { _id, price, patientName, patientEmail } = appointment;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://damp-basin-02445.herokuapp.com/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            });
    }, [price]);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '');
        setProcessing(true);

        /* if (error) {
            setCardError(error.message)
            console.log('[error]', error);
        } else {
            setCardError('');
            console.log('[PaymentMethod]', paymentMethod);
        } */

        //confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patientEmail
                    },
                },
            },
        );

        if (intentError) {
            setProcessing(false);
            setCardError(intentError?.message);
            setSuccess('');
        }
        else {
            setCardError('');
            setTxId(paymentIntent.id)
            console.log(paymentIntent)
            setSuccess('Your Payment is completed');
            //update booking and insert payment to database
            const payment = {
                appointment: _id,
                txId: paymentIntent.id
            }
            fetch(`https://damp-basin-02445.herokuapp.com/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
                body: JSON.stringify(payment),
            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false);
                })

        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-xs mt-10' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className=' text-rose-600'>{cardError}</p>
            }
            {
                success && <div className=' text-secondary'>
                    <p>{success}</p>
                    <p>Your Transection Id: <span className=' text-primary font-semibold'>{txId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;