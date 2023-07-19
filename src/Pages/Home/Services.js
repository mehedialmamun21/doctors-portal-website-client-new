import React from 'react';
import ServicesCard from './ServicesCard';
// import fluoride from '../../assets/images/fluoride.png'
// import cavity from '../../assets/images/cavity.png'
// import whitening from '../../assets/images/whitening.png'

const Services = () => {

    const services = [

        {
            _id: 1,
            name: "Farm Machinery and Equipment",
            url: "https://i.postimg.cc/76z0fgJ1/image-500x300-2.png",
            description: "Automated planting and harvesting systems, smart irrigation systems, and other innovative technologies that enhance operational efficiency and reduce labor requirements."
        },
        {
            _id: 2,
            name: "Supply of Agricultural Inputs",
            url: "https://i.postimg.cc/pLB0dtMV/image-500x300-1.png",
            description: "Seeds, Fertilizers, Pesticides, Irrigation Systems, Agricultural Machinery, Agrochemicals, Farm Implements and Tools"

        },
        {
            _id: 3,
            name: "Farm Management",
            url: "https://i.postimg.cc/JhHFBV4f/image-500x300-9.png",
            description: "Our software platforms and mobile applications help farmers to manage and monitor their farms more effectively."
        },

        {
            _id: 4,
            name: "Training and Capacity Building",
            url: "https://i.postimg.cc/W3yYP6LM/image-500x300-4.png",
            description: "These programs cover various aspects, including technology adoption, sustainable farming methods, and best practices for maximizing yields."
        },

        {
            _id: 5,
            name: "Crop and Soil Monitoring",
            url: "https://i.postimg.cc/DZ8wGzb2/image-500x300-8.png",
            description: "We provide farmers real-time information on crop health, soil moisture levels, nutrient content, and other relevant parameters."
        },

        {
            _id: 6,
            name: "Market Access and Advisory Services",
            url: "https://i.postimg.cc/bwF3qC8s/image-500x300-10.png",
            description: "We provide market access platforms as well as connect farmers with buyers, retailers, or food processing companies including advisory services."
        }


    ];



    return (
        <div className='px-5 pt-8 lg:px-40 lg:pb-28'>

            <div className='text-center pb-10 lg:pb-16'>
                <h1 className='text-2xl text-center text-secondary font-semibold'>Our Services</h1>
                <h3 className='text-4xl pb-2 font-mono text-slate-600'>Services We Provide</h3>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 drop-shadow-2xl'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>

        </div>
    );
};

export default Services;