import React from 'react';

const ServicesCard = ({ service }) => {
    return (

        <div className="card lg:max-w-lg bg-cyan-800 pt-8 shadow-xl rounded-sm border">
            <figure>
                {/* <img src={service.img} alt="" className="w-1/6" /> */}
                <img src={service.url} alt="" className="hover:scale-x-125 hover:scale-y-125 duration-700 cursor-pointer" />
            </figure>
            <div className="card-body items-center text-center text-zinc-700">
                <p className="card-title text-white font-mono">{service.name}</p>
                {/* <span className='text-sm text-white font-mono'>(In Services)</span> */}
                <p className='border-t-2 border-zinc-300 text-white font-mono pt-2'>{service.description}</p>
            </div>
        </div>

    );
};

export default ServicesCard;