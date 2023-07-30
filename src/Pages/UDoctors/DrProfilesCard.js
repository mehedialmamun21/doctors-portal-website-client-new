import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const DrProfilesCard = ({ doctor }) => {

    const { _id, degree, speciality } = doctor;

    const navigate = useNavigate();

    const navigateToDetailsPage = id => {
        navigate(`/drDetails/${id}`);
    }

    return (
        <div className='card lg:max-w-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-sm border bg-white'>

            {/* <div className=''>
                <figure>
                    <img src={doctor.img} alt="" className="border rounded border-gray-500 scale-x-110 hover:scale-x-125 duration-500 scale-y-75 hover:scale-y-95 cursor-pointer" />
                </figure>
            </div> */}

            <div className="card-body py-5 pl-14 text-zinc-700">

                <div>
                    <div>
                        <p className='text-cyan-600 font-semibold font-mono text-lg border-b border-zinc-500 pb-1'>{doctor.name}</p>
                    </div>
                    <div>
                        <p className='text-zinc-700 font-mono text-lg pt-5'>{degree}</p>
                    </div>
                    <div>
                        <p className='text-zinc-700 font-mono text-lg'>{speciality}</p>
                    </div>
                </div>

                <div className='pt-3 flex pl-32 lg:pl-44 items-center'>
                    <p className='text-cyan-600 text-lg font-bold flex items-center'><BsArrowRight /></p>
                    <button className='rounded-sm text-zinc-700 text-md font-mono cursor-pointer' onClick={() => navigateToDetailsPage(_id)}> <span className='text-zinc-700 hover:font-semibold'>more</span> </button>
                </div>

            </div>

        </div>
    );
};

export default DrProfilesCard;