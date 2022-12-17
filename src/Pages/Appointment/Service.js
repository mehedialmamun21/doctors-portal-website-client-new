import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-2xl rounded-sm">
            <div className="card-body text-center">
                <h2 className="card-title justify-center text-zinc-600 text-lg lg:text-xl">{name}</h2>
                <p className='text-sm py-0.5'>
                    {
                        slots.length > 0 ?
                            <span>{slots[0]}</span>
                            :
                            <span className='text-red-500 font-semibold'>Try another date</span>
                    }
                </p>
                <p className='text-md py-0.5'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p>Price : <span className='font-semibold'> {price} </span>Tk</p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-sm hover:scale-105 duration-300 bg-gradient-to-r from-secondary to-primary rounded-sm text-white font-semibold uppercase mt-2 lg:mt-3 border-none">
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Service;