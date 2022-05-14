import React from 'react';

const GradientButton = (props) => {
    return (
        <button className="btn btn-primary uppercase font-bold bg-gradient-to-r from-secondary to-primary">{props.children}</button>
    );
};

export default GradientButton;