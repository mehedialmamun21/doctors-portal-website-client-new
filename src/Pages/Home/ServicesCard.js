import React from 'react';

const ServicesCard = ({ service }) => {
    return (

        <div className="card lg:max-w-lg bg-base-100 shadow-2xl pt-4 rounded-sm">
            <figure>
                {/* <img src={service.img} alt="" className="w-1/6" /> */}
                <img src={service.url} alt="" className="" />
            </figure>
            <div className="card-body items-center text-center text-zinc-700">
                <p className="card-title text-blue-600">{service.name}</p>
                <span className='text-sm text-blue-600'>In Services</span>
                <p className='border-t-2 border-zinc-300 pt-2'>{service.description}</p>
            </div>
        </div>

    );
};

export default ServicesCard;