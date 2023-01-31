import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    return (
        <div className="card lg:max-w-lg bg-cyan-600 border shadow-xl rounded-sm hover:scale-x-110 hover:scale-y-125 duration-700">
            <div className="card-body text-center rounded-sm border-2 hover:border-orange-600 border-cyan-600">
                <h2 className="card-title justify-center text-black text-lg lg:text-xl font-mono">{name}</h2>
                <p className='text-sm py-0.5 font-mono text-white'>
                    {
                        slots.length > 0 ?
                            <span>{slots[0]}</span>
                            :
                            <span className='text-red-500 font-semibold'>Try another date</span>
                    }
                </p>
                <p className='text-md py-0.5 font-mono text-slate-300'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p className='font-mono text-white'>Price : <span className='font-semibold'> {price} </span>Tk</p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-sm bg-gradient-to-r from-secondary to-primary rounded-sm text-white font-semibold uppercase mt-2 lg:mt-3 border-none">
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Service;