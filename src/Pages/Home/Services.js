import React from 'react';
import ServicesCard from './ServicesCard';
// import fluoride from '../../assets/images/fluoride.png'
// import cavity from '../../assets/images/cavity.png'
// import whitening from '../../assets/images/whitening.png'

const Services = () => {

    const services = [

        {
            _id: 1,
            name: "Orthodontic Braces",
            description: "This is the procedure that makes a dentist a true artist. In this specialized area we can change your smile by correcting your crowded and malposed tooth. We make this service reachable to all.",
            url: "https://i.postimg.cc/hvnf1p2D/clear-braces.png"
        },
        {
            _id: 2,
            name: "Scaling with Polishing",
            description: "Scaling with polishing is a mandatory treatment for all individuals for at least once a year. It completely clean your teeth, removes stains and provide you a happy and bright smile.",
            url: "https://i.postimg.cc/L8f9sz92/Scaling-and-Polishing.png"

        },
        {
            _id: 3,
            name: "Dental Bridge",
            description: "This is the conventional procedure for replacement of missing tooth. Advanced lab technology and adequate training is our strength to provide the best dental bridge to our patients.",
            url: "https://i.postimg.cc/63GLDYJJ/Dental-Bridges1-1024x854.png"
        },

        {
            _id: 4,
            name: "Teeth Whitening",
            description: "Everyone notices a bright, white, glowing smile. That's why we utilize long-lasting Teeth Whitening procedure — because we want you to glow with pride and confidence.",
            url: "https://i.postimg.cc/wBhVqbRH/teeth-whitening3-compressed.png"
        },

        {
            _id: 5,
            name: "Dental Implant",
            description: "Are you tensed with your missing tooth? Don`t worry. We are now prepared with the world`s most advanced technology to replace your tooth. Dental Implant is the most recent procedure to replace tooth.",
            url: "https://i.postimg.cc/7ZJ9cLx5/i-Stock-543979766-2.png"
        },

        {
            _id: 6,
            name: "Root Canal Therapy",
            description: "Root Canal Treatment (RCT) is a very specialized treatment which needs skilled experienced hand as well as modern instrumental support. We are very much able to provide you world class RCT.",
            url: "https://i.postimg.cc/y6fT8RxJ/maxresdefault.png"
        }


    ];



    return (
        <div className='px-5 lg:px-40 py-10 lg:pb-28'>

            <div className='text-center pb-10 lg:pb-20'>
                <h4 className='text-black text-xl lg:text-2xl font-bold uppercase pb-2'>Our Services</h4>
                <h3 className='text-3xl lg:text-4xl pb-2 font-mono text-slate-600'>Services We Provide</h3>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-16 drop-shadow-2xl'>
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