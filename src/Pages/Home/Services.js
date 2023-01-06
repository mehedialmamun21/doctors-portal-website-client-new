import React from 'react';
import ServicesCard from './ServicesCard';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const Services = () => {

    const services = [

        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist will apply to a person's teeth to reduce the risk of cavities.",
            img: fluoride
        },
        {
            _id: 2,
            name: "Cavity Fillings",
            description: "To treat a cavity your dentist will remove the decayed portion of the tooth and then fill the area on the tooth where the decayed material was removed.",
            img: cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: "Everyone notices a bright, white, glowing smile. That's why we utilize long-lasting Teeth Whitening procedure — because we want you to glow with pride and confidence.",
            img: whitening
        },
        {
            _id: 4,
            name: "Root Canal Therapy",
            description: "A root canal is a dental procedure that is used to repair teeth that are infected or badly decayed. It is also called endodontic treatment.",
            img: whitening
        },
        {
            _id: 5,
            name: "Cosmetic Fillings",
            description: "Cosmetic fillings, or tooth- colored fillings, are made of composite resin and glass particle. Cosmetic fillings can improve the appearance of your smile.",
            img: fluoride
        },
        {
            _id: 6,
            name: "Teeth Extractions",
            description: "A tooth extraction is a procedure to remove a tooth from the gum socket. In some cases, dentists extract teeth to prepare the patient's mouth for orthodontic treatment.",
            img: cavity
        }

    ];



    return (
        <div className='px-5 lg:px-40 pt-10 pb-20 lg:pb-40'>

            <div className='text-center pb-20'>
                <h4 className='text-primary text-xl font-semibold uppercase pb-2'>Our Services</h4>
                <h3 className='text-4xl pb-2 text-zinc-700'>Services We Provide</h3>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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