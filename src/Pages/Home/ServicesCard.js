import React from 'react';

const ServicesCard = ({ service }) => {
    return (

        <div className="card lg:max-w-lg border-2 border-cyan-600 pt-4 shadow-xl rounded-sm">
            <figure>
                {/* <img src={service.img} alt="" className="w-1/6" /> */}
                <img src={service.url} alt="" className="hover:scale-x-125 hover:scale-y-105 duration-700 cursor-pointer" />
            </figure>
            <div className="card-body items-center text-center text-zinc-700">
                <p className="card-title text-blue-600">{service.name}</p>
                <span className='text-sm text-blue-700'>In Services</span>
                <p className='border-t-2 border-zinc-300 pt-2'>{service.description}</p>
            </div>
        </div>

    );
};

export default ServicesCard;