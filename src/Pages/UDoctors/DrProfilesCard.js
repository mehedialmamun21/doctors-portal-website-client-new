import React from 'react';
import { BsChevronCompactRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const DrProfilesCard = ({ doctor }) => {

    const { _id, degree, speciality, email, phone } = doctor;

    const navigate = useNavigate();

    const navigateToDetailsPage = id => {
        navigate(`/drDetails/${id}`);
    }

    return (
        // <div className='card lg:max-w-lg bg-cyan-600 shadow-2xl rounded-sm border'>
        <div className='card lg:max-w-lg shadow-2xl rounded-sm border'>

            <div className=''>
                <figure>
                    {/* <img src={doctor.img} alt="" className="border rounded border-gray-500 scale-x-110 hover:scale-x-125 duration-500 scale-y-75 hover:scale-y-95 cursor-pointer w-1/2" /> */}
                    <img src={doctor.img} alt="" className="border rounded border-gray-500 cursor-pointer my-3 w-48 h-44" />
                </figure>
            </div>

            <div className="card-body pt-0 pl-14 text-zinc-700">

                <div>
                    <div>
                        <p className='text-black font-semibold font-mono text-lg border-b border-zinc-300 pb-1'>{doctor.name}</p>
                    </div>
                    <div>
                        <p className='text-slate-700 font-mono text-lg pt-5'>{degree}</p>
                    </div>
                    <div>
                        <p className='text-slate-600 font-mono text-lg'>({speciality})</p>
                    </div>
                    <div>
                        <p className='text-slate-600 font-mono text-lg'>Email: {email}</p>
                    </div>
                    <div>
                        <p className='text-slate-600 font-mono text-lg'>Phone: {phone}</p>
                    </div>
                </div>

                {/* <div className='pt-3 flex pl-52'>
                    <p className='text-white text-lg'><BsChevronCompactRight /></p>
                    <p className='text-white text-lg'><BsChevronCompactRight /></p>
                    <button className='rounded-sm text-white text-md font-mono cursor-pointer' onClick={() => navigateToDetailsPage(_id)}> <span className='text-white hover:text-slate-200'>more</span> </button>
                </div> */}

            </div>

        </div>
    );
};

export default DrProfilesCard;