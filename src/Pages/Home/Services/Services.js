import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Fluoride Treatment',
            body: 'Best service at your nearest place in your budget.',
            img: fluoride
        },
        {
            id: 2,
            title: 'Cavity FIlling',
            body: 'Best service at your nearest place in your budget.',
            img: cavity
        },
        {
            id: 3,
            title: 'Teeth Whitening',
            body: 'Best service at your nearest place in your budget.',
            img: whitening
        },
    ]
    return (
        <div className='my-20'>
            <h4 className='uppercase font-bold text-secondary text-xl text-center'>Our Services</h4>
            <h2 className=' font-bold text-neutral text-4xl text-center mt-4'>Services We Provide</h2>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
                {
                    services.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;