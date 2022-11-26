import React from 'react';

const InfoCard = ({ img, cardTitle, cardDetail, bgClass }) => {
    return (
        <div className={`card lg:card-side shadow-xl rounded-sm ${bgClass}`}>
            <figure>
                <img className='px-5 py-5' src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardDetail}</p>
            </div>
        </div>
    );
};

export default InfoCard;