import React from 'react';
import InfoCard from './InfoCard';

import { FaMapMarked, FaPhone, FaRegClock } from 'react-icons/fa';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 py-2 lg:py-9 px-5 lg:px-0'>
            <InfoCard cardTitle="Contact Us" cardDetail="01521-413730" bgClass="bg-secondary" icon={<FaPhone />}></InfoCard>
            <InfoCard cardTitle="Our Locations" cardDetail="Dental Solution, Dinapur (main branch)" bgClass="bg-accent" icon={<FaMapMarked />}></InfoCard>
            <InfoCard cardTitle="Opening Hours" cardDetail="9 A.M (morning) - 10 P.M (night)" bgClass="bg-secondary" icon={<FaRegClock />}></InfoCard>
        </div>
    );
};

export default Info;