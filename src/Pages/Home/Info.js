import React from 'react';
import InfoCard from './InfoCard';

import { FaMapMarked, FaPhone, FaBusinessTime } from 'react-icons/fa';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-7 lg:gap-10 py-10 lg:pt-3 lg:pb-20 px-5 lg:px-40'>
            <InfoCard cardTitle="Contact Us" cardDetail1="01521 - 413730" cardDetail2="Email : dentalsolutions@gmail.com" cardDetail3="01303 - 114858" bgClass="rounded-sm bg-slate-800" icon={<FaPhone size="1.7rem" />}></InfoCard>
            <InfoCard cardTitle="Our Locations" cardDetail1="Dental Solutions - main branch" cardDetail2="Dinajpur, Bangladesh" cardDetail3="Kazi's Heritage, House-49" bgClass="rounded-sm bg-slate-800" icon={<FaMapMarked size="1.7rem" />}></InfoCard>
            <InfoCard cardTitle="Opening Hours" cardDetail1="Saturday - Thursday" cardDetail2="Friday - Close" cardDetail3="11.00 AM - 09.30 PM" bgClass="rounded-sm bg-slate-800" icon={<FaBusinessTime size="1.8rem" />}></InfoCard>
        </div>

    );
};

export default Info;