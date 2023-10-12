import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';

const CheckoutForm = ({ appointment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const { _id, price, patient, patientName, treatment } = appointment;

    const getCurrentDate = () => {
        const currentTime = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return currentTime.toLocaleDateString('en-US', options);
    };

    const [transactionTime, setTransactionTime] = useState(getCurrentDate());
    const [pdfGenerated, setPdfGenerated] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });
    }, [price]);

    const updateTransactionTime = () => {
        setTransactionTime(getCurrentDate());
    };

    useEffect(() => {
        const dateUpdateInterval = setInterval(updateTransactionTime, 24 * 60 * 60 * 1000); // Update date every 24 hours
        return () => clearInterval(dateUpdateInterval);
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setCardError(error?.message || '');

        setSuccess('');
        setProcessing(true);

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patient
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        } else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            setSuccess('Congrats! your payment is completed');

            const payment = {
                appointment: _id,
                transactionId: paymentIntent.id
            };
            fetch(`http://localhost:5000/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
                .then(data => {
                    setProcessing(false);
                    updateTransactionTime(); // Update the date after successful payment
                });
        }
    }

    const handleDownloadPDF = () => {
        if (transactionId) {
            if (pdfGenerated) {
                alert('PDF Downloaded (check it out!)');
            } else {
                const pdf = new jsPDF();

                pdf.setTextColor(0, 0, 0);
                pdf.setFontSize(16);
                pdf.text(20, 20, 'Payment History');

                pdf.setLineWidth(0.3);
                pdf.line(20, 25, 190, 25);

                pdf.setFontSize(12);

                pdf.setTextColor(0, 180, 0);
                pdf.text(20, 35, `Payment Successful`);

                pdf.setTextColor(0, 0, 0);
                pdf.text(20, 45, `Date: ${transactionTime}`);

                pdf.setTextColor(0, 0, 0);
                pdf.text(20, 55, `Service Name: ${treatment}`);

                pdf.setTextColor(0, 0, 0);
                pdf.text(20, 65, `Price: ${price} Tk (Deducted)`);

                pdf.setTextColor(0, 0, 0);
                pdf.text(20, 75, `Transaction ID: ${transactionId}`);

                pdf.save('transaction_details.pdf');
                setPdfGenerated(true);
            }
        }
    }

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
                {transactionId ? (
                    <button
                        className='btn bg-green-500 hover:bg-green-600 border-none rounded-sm px-10 btn-sm mt-10 mb-3 text-white'
                        type="submit"
                        disabled={true} // Disable the button when payment is completed
                    >
                        Paid
                    </button>
                ) : (
                    <button
                        className='btn bg-green-500 hover-bg-green-600 border-none rounded-sm px-10 btn-sm mt-10 mb-3 text-white'
                        type="submit"
                        disabled={!stripe || !clientSecret || processing}
                    >
                        Pay
                    </button>
                )}
            </form>
            {cardError && <p className='text-red-500 font-mono'>{cardError}</p>}
            {transactionId && !pdfGenerated && (
                <>
                    <p className='text-green-500 font-mono'>Payment successful</p>
                    <p className='font-mono'>Date: {transactionTime}</p>
                    <p className='font-mono'>Transaction ID: {transactionId}</p>
                    <button className='btn w-2/5 bg-violet-500 hover-bg-blue-600 border-none rounded-sm btn-sm mt-2 text-white' onClick={handleDownloadPDF}>
                        Download as PDF
                    </button>
                </>
            )}
            {pdfGenerated && (
                <p className='text-blue-500 font-mono'>PDF Downloaded (check it out!)</p>
            )}
        </>
    );
};

export default CheckoutForm;