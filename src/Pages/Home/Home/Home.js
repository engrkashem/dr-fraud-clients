import React from 'react';
import Footer from '../../Shares/Footer/Footer';
import Banner from '../../Shares/Banner/Banner';
import BulletInfo from '../BulletInfo/BulletInfo';
import ContactSec from '../ContactSec/ContactSec';
import DentalCard from '../DentalCard/DentalCard';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import BannerText from '../BannerText/BannerText';

const Home = () => {
    return (
        <div >
            <Banner><BannerText /></Banner>
            <BulletInfo />
            <Services />
            <DentalCard />
            <MakeAppoinment />
            <Testimonial />
            <ContactSec />
            <Footer></Footer>
        </div>
    );
};

export default Home;