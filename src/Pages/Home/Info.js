import React from 'react';
import InfoCard from './InfoCard';

import { FaMapMarked, FaPhone, FaRegClock } from 'react-icons/fa';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 py-2 lg:pt-0 lg:pb-5 px-5 lg:px-40'>
            <InfoCard cardTitle="Contact Us" cardDetail1="01521 - 413730" cardDetail2="Email : dentalsolution@gmail.com" cardDetail3="01303 - 114858" bgClass="border" icon={<FaPhone />}></InfoCard>
            <InfoCard cardTitle="Our Locations" cardDetail1="Dental Solution - ( main branch )" cardDetail2="Dinajpur, Bangladesh" cardDetail3="Kazi's Heritage, House-49, Road-11" bgClass="border" icon={<FaMapMarked />}></InfoCard>
            <InfoCard cardTitle="Opening Hours" cardDetail1="Saturday - Thursday" cardDetail2="Friday - Close" cardDetail3="11.00 AM - 09.30 PM" bgClass="border" icon={<FaRegClock />}></InfoCard>
        </div>
    );
};

export default Info;