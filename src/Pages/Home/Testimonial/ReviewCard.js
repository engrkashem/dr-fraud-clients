import React from 'react';

const ReviewCard = ({ review: { name, img, location, review } }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review}</p>
                <div className="flex items-center mt-3">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-3">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h3>{name}</h3>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;