import { format } from 'date-fns';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Banner from '../Shares/Banner/Banner';
import Footer from '../Shares/Footer/Footer';
import AppointmentModal from './AppointmentModal';
import AvailableService from './AvailableService';
import DatePicker from './DatePicker';
import Service from './Service';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    const formatedDate = format(date, 'PP');
    // const url = `http://localhost:5000/available?date=${formatedDate}`
    const url = `https://damp-basin-02445.herokuapp.com/available?date=${formatedDate}`

    //react query is used to load data
    const { data: services, isLoading, refetch } = useQuery(['availableSlots', formatedDate], () => fetch(url).then(res => res.json()))

    //set treatment that user want to avail
    const [treatment, setTreatment] = useState(null);

    const [user] = useAuthState(auth);
    // console.log(user)

    if (isLoading) {
        return <button className="btn loading">loading</button>;
    }


    return (
        <div>
            <Banner><DatePicker date={date} setDate={setDate} /></Banner>
            <AvailableService date={date} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-28'>
                {
                    services?.map(service => <Service
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
                formatedDate={formatedDate}
                refetch={refetch}
            ></AppointmentModal>}
            <Footer />
        </div>
    );
};

export default Appointment;