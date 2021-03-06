import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import ReviewCard from './ReviewCard';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Harry',
            Location: 'Misouri',
            img: people1,
            review: 'Well Maintained environment and standard cleanliness. The Equipments are also sanitized professionally as well as behaviour. Highly recommended.'
        },
        {
            _id: 2,
            name: 'Winson Harry',
            Location: 'Misouri',
            img: people2,
            review: 'Well Maintained environment and standard cleanliness. The Equipments are also sanitized professionally as well as behaviour. Highly recommended.'
        },
        {
            _id: 3,
            name: 'Winson Harry',
            Location: 'Misouri',
            img: people3,
            review: 'Well Maintained environment and standard cleanliness. The Equipments are also sanitized professionally as well as behaviour. Highly recommended.'
        },
    ]
    return (
        <section className='mt-28'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-secondary text-xl font-semibold'>Testimonial</h3>
                    <h2 className=' text-2xl lg:text-4xl font-semibold'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48 ' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;