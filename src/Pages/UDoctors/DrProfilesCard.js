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
        <div className='card lg:max-w-lg bg-base-100 shadow-2xl pt-4 rounded-sm'>


            <div className=''>
                <figure>
                    <img src={doctor.img} alt="" className="border rounded border-gray-500 scale-x-110 hover:scale-x-125 duration-500 scale-y-75 hover:scale-y-95 cursor-pointer" />
                    <p className='text-white rounded-sm bg-cyan-500 px-4 font-semibold font-mono text-lg absolute top=[80%] -translate-x-[12%] translate-y-[480%]'>{doctor.name}</p>
                </figure>
            </div>

            <div className="card-body pt-10 pl-14 text-zinc-700">

                <div>
                    <div>
                        <p className='text-black font-mono font-semibold'>{degree}</p>
                    </div>
                    <div>
                        <p className='text-black font-mono font-semibold'>{speciality}</p>
                    </div>
                    <div>
                        <p className='text-black font-mono'>Dental Solutions, Dinajpur</p>
                    </div>
                </div>

                <div className='mt-3 flex pl-52'>
                    <p className='text-cyan-500 text-lg'><BsChevronCompactRight /></p>
                    <p className='text-cyan-500 text-lg'><BsChevronCompactRight /></p>
                    <button className='rounded-sm text-cyan-500 text-md font-semibold font-mono cursor-pointer' onClick={() => navigateToPurchasePage(_id)}>more</button>
                </div>

            </div>


        </div>
    );
};

export default DrProfilesCard;