import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const DrProfilesCard = ({ doctor }) => {

    const { _id, degree, speciality, email, phone } = doctor;

    const navigate = useNavigate();

    const navigateToDetailsPage = id => {
        navigate(`/drDetails/${id}`);
    }

    return (
        <div className='card lg:max-w-lg border border-zinc-400 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-sm bg-white' style={{ maxWidth: '300px', width: '130%', height: '360px' }}>

            <div className=''>
                <figure>
                    <img src={doctor.img} alt="" className="border rounded-sm border-gray-400 scale-x-110 hover:scale-x-125 duration-500 scale-y-75 hover:scale-y-95 cursor-pointer" style={{ width: '120px', height: '140px' }} />
                </figure>
            </div>

            <div className="card-body pt-0 pb-0 pl-10 text-zinc-700">

                <div>
                    <div>
                        <p className='text-sky-500 font-mono border-b border-zinc-500 pb-1'>{doctor.name}</p>
                    </div>
                    <div>
                        <p className='text-zinc-700 font-mono pt-3 text-sm'>{degree}</p>
                        <p className='mt-1 text-sm text-zinc-700'> <span className='font-semibold'>{speciality}</span> </p>
                    </div>
                    <br />

                    <div>
                        <p className='text-zinc-700 font-mono text-sm'>Email: <br /> {email}</p>
                    </div>
                </div>

                <div className='pt-3 flex pl-40 lg:pl-40 items-center'>
                    <p className='text-teal-600 text-lg font-bold flex items-center'><BsArrowRight size="1rem" /></p>
                    <button className='rounded-sm text-zinc-700 text-sm font-mono cursor-pointer' onClick={() => navigateToDetailsPage(_id)}> <span className='hover:text-zinc-700 font-semibold text-teal-600'>more</span> </button>
                </div>

            </div>

        </div >
    );
};

export default DrProfilesCard;