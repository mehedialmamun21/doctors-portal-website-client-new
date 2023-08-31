import React from 'react';

const ServicesCard = ({ service }) => {
    return (

        <div className="card lg:max-w-lg bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-sm border-2 border-t-orange-400">
            <figure>
                {/* <img src={service.img} alt="" className="w-1/6" /> */}
                {/* <img src={service.url} alt="" className="hover:scale-x-125 hover:scale-y-125 duration-700 cursor-pointer" /> */}
            </figure>
            <div className="card-body items-center text-center text-zinc-800">
                <p className="card-title text-zinc-800 font-mono">{service.name}</p>
                {/* <span className='text-sm text-slate-300 font-mono'>(In Services)</span> */}
                <p className='border-t border-zinc-300 text-zinc-800 font-serif pt-2'>{service.description}</p>
            </div>
        </div>

    );
};

export default ServicesCard;