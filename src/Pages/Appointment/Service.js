import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    return (
        <div className="card lg:max-w-lg bg-cyan-700 border shadow-xl rounded-sm hover:scale-x-110 hover:scale-y-125 duration-700">
            <div className="card-body text-center rounded-sm border">
                <h2 className="card-title justify-center text-white text-lg lg:text-xl font-mono">{name}</h2>
                <p className='text-sm py-0.5 font-mono text-slate-300'>
                    {
                        slots.length > 0 ?
                            <span>{slots[0]}</span>
                            :
                            <span className='text-red-500 font-semibold'>Try another date</span>
                    }
                </p>
                <p className='text-md py-0.5 font-mono text-slate-300'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p className='font-mono text-slate-300'> <span className='text-slate-300'>Price:</span> <span className='text-white'> {price} Tk</span> </p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-sm bg-gradient-to-r from-secondary to-primary rounded-sm text-white font-semibold uppercase mt-2 lg:mt-3 border border-white hover:border-white">
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Service;