import React from 'react';

const InfoCard = ({ icon, cardTitle, cardDetail, bgClass }) => {
    return (
        <div className={`card lg:card-side shadow-xl rounded-sm ${bgClass}`}>
            <span className='flex justify-center items-center pl-4 text-white text-4xl'>{icon}</span>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardDetail}</p>
            </div>
        </div>
    );
};

export default InfoCard;