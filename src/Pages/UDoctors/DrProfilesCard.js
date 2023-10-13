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
        <div className='card lg:max-w-lg border border-zinc-400 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-sm bg-white' style={{ maxWidth: '300px', width: '80%', height: '320px' }}>

            <div className=''>
                <figure>
                    <img src={doctor.img} alt="" className="border rounded border-gray-500 scale-x-110 hover:scale-x-125 duration-500 scale-y-75 hover:scale-y-95 cursor-pointer" style={{ width: '120px', height: '140px' }} />
                </figure>
            </div>

            <div className="card-body py-5 pl-14 text-zinc-700">

                <div>
                    <div>
                        <p className='text-blue-500 font-semibold font-mono border-b border-zinc-500 pb-1'>{doctor.name}</p>
                    </div>
                    <div>
                        <p className='text-zinc-700 font-mono pt-3'>{degree}, {speciality}</p>
                    </div>
                    <div>
                        <p className='text-zinc-700 font-mono'>{email}</p>
                    </div>
                    <div>
                        <p className='text-zinc-700 font-mono'>{phone}</p>
                    </div>
                </div>

                <div className='pt-3 flex pl-32 lg:pl-28 items-center'>
                    <p className='text-zinc-700 text-lg font-bold flex items-center'><BsArrowRight size="1rem" /></p>
                    <button className='rounded-sm text-zinc-700 text-sm font-mono cursor-pointer' onClick={() => navigateToDetailsPage(_id)}> <span className='hover:text-zinc-700 font-semibold text-blue-500'>more</span> </button>
                </div>

            </div>

        </div>
    );
};

export default DrProfilesCard;