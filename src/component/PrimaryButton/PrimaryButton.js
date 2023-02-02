import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className="btn btn-primary hover:scale-105 duration-300 uppercase text-slate-300 font-semibold bg-gradient-to-r from-secondary to-primary px-10 rounded-sm border border-white hover:border-white">{children}</button>
        </div>
    );
};

export default PrimaryButton;