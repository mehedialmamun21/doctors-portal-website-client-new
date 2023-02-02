import React from 'react';
import { BsChevronCompactRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const DrProfilesCard = ({ doctor }) => {

    const { _id, degree, speciality } = doctor;

    const navigate = useNavigate();

    const navigateToPurchasePage = id => {
        navigate(`/drDetails/${id}`);
    }

    return (
        <div className='card lg:max-w-lg bg-cyan-800 shadow-2xl rounded-sm border'>


            <div className=''>
                <figure>
                    <img src={doctor.img} alt="" className="border rounded border-gray-500 scale-x-110 hover:scale-x-125 duration-500 scale-y-75 hover:scale-y-95 cursor-pointer" />
                </figure>
            </div>

            <div className="card-body pt-0 pl-14 text-zinc-700">

                <div>
                    <div>
                        <p className='text-white font-semibold font-mono text-lg border-b-2 border-zinc-300 pb-1'>{doctor.name}</p>
                    </div>
                    <div>
                        <p className='text-slate-300 font-mono text-lg pt-5'>{degree}</p>
                    </div>
                    <div>
                        <p className='text-slate-300 font-mono text-lg'>{speciality}</p>
                    </div>
                </div>

                <div className='pt-5 flex pl-52'>
                    <p className='text-white text-lg'><BsChevronCompactRight /></p>
                    <p className='text-white text-lg'><BsChevronCompactRight /></p>
                    <button className='rounded-sm text-slate-300 text-md font-semibold font-mono cursor-pointer' onClick={() => navigateToPurchasePage(_id)}> <span className='hover:text-black text-white'>more</span> </button>
                </div>

            </div>


        </div>
    );
};

export default DrProfilesCard;