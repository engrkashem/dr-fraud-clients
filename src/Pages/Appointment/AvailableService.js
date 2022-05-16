import { format } from 'date-fns';
import React from 'react';

const AvailableService = ({ date }) => {
    return (
        <section>
            <h3 className=' text-secondary text-xl font-semibold text-center'>Available Service on: {format(date, 'PP')}</h3>
        </section>
    );
};

export default AvailableService;