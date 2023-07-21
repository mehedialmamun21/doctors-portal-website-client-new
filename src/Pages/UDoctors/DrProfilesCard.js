import React from 'react';
import { BsChevronCompactRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const DrProfilesCard = ({ doctor }) => {

    const { _id, degree, speciality } = doctor;

    const navigate = useNavigate();

    const navigateToDetailsPage = id => {
        navigate(`/drDetails/${id}`);
    }

    return (
        <div className='card lg:max-w-lg shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-sm border'>

            {/* <div className=''>
                <figure>
                    <img src={doctor.img} alt="" className="border rounded border-gray-500 scale-x-110 hover:scale-x-125 duration-500 scale-y-75 hover:scale-y-95 cursor-pointer" />
                </figure>
            </div> */}

            <div className="card-body py-5 pl-14 text-zinc-700">

                <div>
                    <div>
                        <p className='text-zinc-700 font-semibold font-mono text-lg border-b border-zinc-500 pb-1'>{doctor.name}</p>
                    </div>
                    <div>
                        <p className='text-zinc-700 font-mono text-lg pt-5'>{degree}</p>
                    </div>
                    <div>
                        <p className='text-zinc-700 font-mono text-lg'>{speciality}</p>
                    </div>
                </div>

                <div className='pt-3 flex pl-36 lg:pl-52'>
                    <p className='text-zinc-700 text-lg'><BsChevronCompactRight /></p>
                    <p className='text-zinc-700 text-lg'><BsChevronCompactRight /></p>
                    <button className='rounded-sm text-zinc-700 text-md font-mono cursor-pointer' onClick={() => navigateToDetailsPage(_id)}> <span className='text-zinc-700 hover:font-semibold'>more</span> </button>
                </div>

            </div>

        </div>
    );
};

export default DrProfilesCard;