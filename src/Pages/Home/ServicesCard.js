import React from 'react';

const ServicesCard = ({ service }) => {
    return (


        <div className="card lg:max-w-lg bg-base-100 shadow-2xl pt-5">
            <figure>
                <img src={service.img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.description}</p>
            </div>
        </div>



    );
};

export default ServicesCard;