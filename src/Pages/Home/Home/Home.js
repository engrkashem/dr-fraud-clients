import React from 'react';
import Banner from '../Banner/Banner';
import BulletInfo from '../BulletInfo/BulletInfo';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className=' px-auto lg:px-12'>
            <Banner />
            <BulletInfo />
            <Services />
        </div>
    );
};

export default Home;