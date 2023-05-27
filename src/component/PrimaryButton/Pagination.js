import React from 'react';

const Pagination = () => {
    return (
        <div className='flex items-center justify-center mt-20'>
            <div className="btn-group grid grid-cols-2">
                <button className="btn btn-outline">Previous page</button>
                <button className="btn btn-outline">Next</button>
            </div>
        </div>
    );
};

export default Pagination;