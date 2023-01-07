import React from 'react';
import { BsChevronCompactRight } from 'react-icons/bs';

const DrProfilesCard = ({ profile }) => {
    return (
        <div className='card lg:max-w-lg bg-base-100 shadow-2xl pt-4 rounded-sm'>
            <div className='cursor-pointer'>
                <figure>
                    <img src={profile.url} alt="" className="border-2 rounded-sm border-orange-500 hover:scale-105 duration-500" />
                    <p className='text-white border-2 rounded-sm border-orange-500 bg-blue-500 hover:bg-gray-600 px-4 font-semibold text-lg absolute top=[80%] -translate-x-[22%] translate-y-[444%]'>{profile.name}</p>
                </figure>
            </div>
            <div className="card-body pt-10 text-zinc-700">
                <div>
                    <p className='text-black'>{profile.description1}</p>
                </div>
                <div>
                    <p className='text-black'>{profile.description2}</p>
                </div>
                <div>
                    <p className='text-black'>{profile.description3}</p>
                </div>
                <div className='mt-3 flex pl-48'>
                    <p className='text-blue-600 text-lg'><BsChevronCompactRight /></p>
                    <p className='text-blue-600 text-lg'><BsChevronCompactRight /></p>
                    <p className='cursor-pointer rounded-sm text-blue-600 text-sm font-semibold '>more..</p>
                </div>

            </div>
        </div>
    );
};

export default DrProfilesCard;