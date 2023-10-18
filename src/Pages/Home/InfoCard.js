import React from 'react';

const InfoCard = ({ icon, cardTitle, cardDetail1, cardDetail2, cardDetail3, bgClass }) => {
    return (
        <div className={`card lg:card-side shadow-xl rounded-sm ${bgClass}`}>
            <span className='flex justify-center items-center pl-0 py-3 lg:py-0 lg:px-3 bg-slate-500 text-white'>{icon}</span>
            <div className="card-body bg-slate-600">
                <h2 className="card-title font-serif text-white">{cardTitle}</h2>
                <p className='font-serif text-white'>{cardDetail1}</p>
                <p className='font-serif text-white'>{cardDetail3}</p>
                <p className='font-serif text-white pt-1 border-t border-zinc-100'>{cardDetail2}</p>
            </div>
        </div>
    );
};

export default InfoCard;