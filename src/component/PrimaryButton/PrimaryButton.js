import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className="btn btn-primary uppercase text-white font-semibold bg-gradient-to-r from-secondary to-primary px-10 rounded-sm border-none">{children}</button>
        </div>
    );
};

export default PrimaryButton;