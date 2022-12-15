import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 py-10 px-5 lg:px-0'>
            <InfoCard cardTitle="Opening Hours" cardDetail="9 A.M (morning) - 10 P.M (night)" bgClass="bg-secondary" img={clock}></InfoCard>
            <InfoCard cardTitle="Our Locations" cardDetail="Dental Solution, Dinapur (main branch)" bgClass="bg-accent" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us" cardDetail="01521-413730" bgClass="bg-secondary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;