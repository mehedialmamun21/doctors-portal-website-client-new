import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import jsPDF from 'jspdf';
import { useEffect } from 'react';

const Checkout = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [transactionId, setTransactionId] = useState('');

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const date = currentTime.getFullYear() + '-' + (currentTime.getMonth() + 1) + '-' + currentTime.getDate();
    const time = currentTime.getHours() + ':' + (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes();



    const [pdfGenerated, setPdfGenerated] = useState(false);

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

        if (error) {
            setCardError(error.message);
            setTransactionId('');
        } else {
            setCardError('');
            setTransactionId(paymentMethod.id);
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
                pdf.text(20, 45, `Issue Date & Time: ${date}  (${time})`);

                pdf.setTextColor(0, 0, 0);
                pdf.text(20, 55, `Total Price: ${price} Tk  (Deducted)`);

                pdf.setTextColor(0, 0, 0);
                pdf.text(20, 75, `Transaction ID: ${transactionId}`);

                pdf.save('transaction_details.pdf');
                setPdfGenerated(true);
            }
        }
    }

    return (
        <>
            <form className='lg:w-3/6 mx-5 lg:mx-60 my-10 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-5 py-5 rounded-sm' onSubmit={handleSubmit}>
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

                <button className='btn bg-green-500 hover:bg-green-600 border-none rounded-sm px-6 btn-sm mt-10 mb-2 text-white' type="submit" disabled={!!transactionId}>
                    {transactionId ? (
                        <span style={{ color: 'black' }}>Paid</span>
                    ) : 'Pay'}
                </button>

                <div className='mt-3'>
                    {cardError && <p className='text-red-500 font-mono'>{cardError}</p>}
                </div>

                {transactionId && !pdfGenerated &&
                    <>
                        <p className='text-green-500 font-mono'>Payment successful</p>
                        <p className='font-mono'>Issue Date: {date}, {time} </p>
                        <p className='font-mono'>Transaction ID: {transactionId}</p>
                        <button className='btn bg-violet-500 hover-bg-blue-600 border-none rounded-sm px-4 btn-sm mt-2 text-white' onClick={handleDownloadPDF}>
                            Download as PDF
                        </button>
                    </>
                }

                {pdfGenerated && (
                    <p className='text-blue-500 font-mono'>PDF Downloaded (check it out!)</p>
                )}
            </form>
        </>
    );

};

export default Checkout;