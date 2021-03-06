import React from 'react';

const BulletPoint = ({ img, cardTitle, bgColor }) => {
    return (
        <div className={`card card-side shadow-xl text-white pl-5 ${bgColor}`}>
            <figure>
                <img src={img} alt='' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to watch on Jetflix app.</p>
            </div>
        </div>
    );
};

export default BulletPoint;