import React from 'react';
import Doctors from '../Doctors/Doctors';

const Prescription = () => {
    return (
        <section>
            <div>
                <h2 className='mt-24 mb-8 font-semibold border-2 border-y-zinc-400 border-x-gray-100 py-3 mx-5 lg:mx-80 text-center uppercase text-2xl'>Prescription Section</h2>
            </div>
            <Doctors></Doctors>
        </section>
    );
};

export default Prescription;