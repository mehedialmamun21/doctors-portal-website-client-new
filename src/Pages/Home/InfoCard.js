import React from 'react';

const InfoCard = ({ icon, cardTitle, cardDetail1, cardDetail2, cardDetail3, bgClass }) => {
    return (
        <div className={`card lg:card-side shadow-xl rounded-sm ${bgClass}`}>
            <span className='flex justify-center items-center pl-6 text-white text-4xl'>{icon}</span>
            <div className="card-body text-white">
                <h2 className="card-title font-mono">{cardTitle}</h2>
                <p className='font-mono'>{cardDetail1}</p>
                <p className='font-mono'>{cardDetail3}</p>
                <hr />
                <p className='font-mono'>{cardDetail2}</p>
            </div>
        </div>
    );
};

export default InfoCard;