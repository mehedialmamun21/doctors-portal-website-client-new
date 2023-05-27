import React from 'react';

const ServicesCard = ({ service }) => {

    return (

        <div className="card lg:max-w-lg  shadow-xl rounded-sm border">
            <figure>
                {/* <img src={service.img} alt="" className="w-1/6" /> */}
                <img src={service.url} alt="" className="hover:scale-x-90 hover:scale-y-90 duration-700 cursor-pointer" />
            </figure>
            <div className="card-body items-center text-center text-zinc-700">
                <p className="card-title text-gray-700 font-mono mb-5">{service.name}</p>
                {/* <a href="#" className='text-green-600 text-sm'>বিস্তারিত..</a> */}
                {/* <span className='text-sm text-slate-300 font-mono'>(In Services)</span> */}
                {/* <p className='border-t border-zinc-300 text-slate-200 font-mono pt-2'>{service.description}</p> */}
                {/* <button className='rounded-sm text-white text-md font-mono cursor-pointer '> <span className='text-white hover:text-slate-200 border px-4 py-2'>more details</span> </button> */}
            </div>
        </div>

    );
};

export default ServicesCard;