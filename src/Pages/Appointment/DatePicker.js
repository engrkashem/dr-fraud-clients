import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const DatePicker = ({ date, setDate }) => {
    return (
        <>
            <DayPicker
                mode="single"
                selected={date}
                onDayClick={setDate}
            />
        </>
    );
};

export default DatePicker;