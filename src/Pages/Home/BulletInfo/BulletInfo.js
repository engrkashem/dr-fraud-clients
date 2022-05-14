import React from 'react';
import BulletPoint from './BulletPoint';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const BulletInfo = () => {
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <BulletPoint bgColor=' bg-gradient-to-r from-secondary to-primary' cardTitle='Opening Hours' img={clock}></BulletPoint>
            <BulletPoint bgColor='bg-neutral' cardTitle='Visit Our Hospital' img={marker}></BulletPoint>
            <BulletPoint bgColor=' bg-gradient-to-r from-secondary to-primary' cardTitle='Contact Now' img={phone}></BulletPoint>
        </div>
    );
};

export default BulletInfo;