import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

const ServiceCard = ({ service }) => {
    const { img, price, title } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-md text-orange-600 font-semibold'>Price: BDT {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn border-none bg-white text-orange-600 text-2xl font-bold"> <BsArrowRightShort></BsArrowRightShort> </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;