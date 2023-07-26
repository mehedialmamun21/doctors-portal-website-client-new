import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    return (
        // <div className="card lg:max-w-lg border shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-sm hover:scale-x-110 hover:scale-y-125 duration-700">
        <div className="card lg:max-w-lg shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] duration-500">
            <div className="card-body text-center">
                <h2 className="card-title justify-center text-zinc-700 text-lg lg:text-xl font-mono">{name}</h2>
                <p className='text-sm py-0.5 font-mono text-zinc-600'>
                    {
                        slots.length > 0 ?
                            <span>{slots[0]}</span>
                            :
                            <span className='text-red-500 font-semibold'>Try another date</span>
                    }
                </p>
                <p className='text-md py-0.5 font-mono text-zinc-600'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p className='font-mono text-zinc-600'> <span className='text-zinc-600'>Price:</span> <span className='text-zinc-600'> {price} Tk</span> </p>
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