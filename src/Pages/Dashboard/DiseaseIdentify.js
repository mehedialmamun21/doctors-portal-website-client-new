import React from 'react';

const DiseaseIdentify = () => {
    return (
        <div className='px-40'>

            <input type="file" className="file-input mt-28 file-input-bordered border-2 file-input-accent w-full max-w-xs" />
            <br />
            <button className='rounded-2xl px-10 py-1 text-md text-white font-semibold hover:text-black mt-7 bg-green-400'>Predict</button>

            <p className='mt-10 font-semibold text-lg'>Result: </p>
        </div>
    );
};

export default DiseaseIdentify;