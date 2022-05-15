import React from 'react';
import Banner from '../Banner/Banner';
import BulletInfo from '../BulletInfo/BulletInfo';
import ContactSec from '../ContactSec/ContactSec';
import DentalCard from '../DentalCard/DentalCard';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className=' px-auto lg:px-12'>
            <Banner />
            <BulletInfo />
            <Services />
            <DentalCard />
            <MakeAppoinment />
            <Testimonial />
            <ContactSec />
        </div>
    );
};

export default Home;