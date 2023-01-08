import React from 'react';
import { BsChevronCompactRight } from 'react-icons/bs';

const DrProfilesCard = ({ profile }) => {
    return (
        <div className='card lg:max-w-lg bg-base-100 shadow-2xl pt-4 rounded-sm'>
            <div className=''>
                <figure>
                    <img src={profile.url} alt="" className="border-2 rounded-sm border-cyan-500 scale-x-110 hover:scale-x-125 duration-500 scale-y-75 hover:scale-y-95 cursor-pointer" />
                    <p className='text-white rounded-sm bg-cyan-500 hover:bg-cyan-600 px-4 font-semibold font-mono text-lg absolute top=[80%] -translate-x-[12%] translate-y-[480%] cursor-pointer'>{profile.name}</p>
                </figure>
            </div>
            <div className="card-body pt-10 pl-14 text-zinc-700">
                <div>
                    <div>
                        <p className='text-black font-mono'>{profile.description1}</p>
                    </div>
                    <div>
                        <p className='text-black font-mono'>{profile.description2}</p>
                    </div>
                    <div>
                        <p className='text-black font-mono'>{profile.description3}</p>
                    </div>
                </div>
                <div className='mt-3 flex pl-52'>
                    <p className='text-cyan-500 text-lg'><BsChevronCompactRight /></p>
                    <p className='text-cyan-500 text-lg'><BsChevronCompactRight /></p>
                    <p className='rounded-sm text-cyan-500 text-md font-semibold font-mono cursor-pointer'>more</p>
                </div>
            </div>
        </div>
    );
};

export default DrProfilesCard;