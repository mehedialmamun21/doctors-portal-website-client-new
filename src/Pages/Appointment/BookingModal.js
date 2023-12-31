import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const { _id, name, slots, price } = treatment;
    const [user, loading, error] = useAuthState(auth);

    const formattedDate = format(date, 'PP');

    const handleBookingSubmit = event => {
        event.preventDefault();
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.success) {
                    toast(`appointment is set, ${formattedDate} at ${slot}`)
                } else {
                    toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`);
                }
                refetch();
                // to close the modal
                setTreatment(null);
            })

    }

    return (

        <div className=''>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box border border-sky-300">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg text-center"> <span className='font-mono'>Booking for -</span> <span className='text-sky-600 font-mono'>{name}</span></h3>
                    <form onSubmit={handleBookingSubmit} className='grid grid-cols-1 gap-4 justify-items-center mt-4'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs font-mono" />
                        <select name='slot' className="select select-bordered border border-zinc-400 w-full max-w-xs font-mono">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}

                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs font-mono" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs font-mono" />
                        <input type="input" name='phone' placeholder="Enter Phone Number" className="input border border-zinc-400 w-full max-w-xs font-mono" required />
                        <input type="submit" value="Submit" className="btn hover:scale-105 duration-300 bg-gradient-to-r from-orange-500 to-sky-500 w-full max-w-xs text-white font-semibold rounded-sm border-none" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;