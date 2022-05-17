import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useGetData from '../../hooks/useGetData';
import Banner from '../Shares/Banner/Banner';
import Footer from '../Shares/Footer/Footer';
import AppointmentModal from './AppointmentModal';
import AvailableService from './AvailableService';
import DatePicker from './DatePicker';
import Service from './Service';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    const url = `http://localhost:5000/services`
    const [services] = useGetData(url);
    const [treatment, setTreatment] = useState(null);

    const [user] = useAuthState(auth);


    return (
        <div>
            <Banner><DatePicker date={date} setDate={setDate} /></Banner>
            <AvailableService date={date} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-28'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <AppointmentModal
                treatment={treatment}
                date={date}
                setTreatment={setTreatment}
                user={user}
            />}
            <Footer />
        </div>
    );
};

export default Appointment;