import React from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import AppointmentSection from '../Components/Appointment/AppointmentSection';
import AppointmentTable from '../Components/Appointment/AppoitmentTable';
import { useEffect } from 'react';

const Appointment = () => {
    
    // const [availableAppointmentsOfTheDay , setAvailableAppointmentsOfTheDay] = useState([]);

    
        // const formatedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        // const bookedAppointmentsId = allBookedAppointments.filter(bookedAp => bookedAp.date === formatedDate && bookedAp.status === 1)
        //                             .map(ap => ap.apId)
        
        // const availableAppointmentsOfTheDay = [...allAppointments]; 
        
        // for (let i = 0; i < allAppointments.length; i++) {        
        //     for (let j = 0; j < bookedAppointmentsId.length; j++) {
        //         if(allAppointments[i].id === bookedAppointmentsId[i] ){
        //             availableAppointmentsOfTheDay[i].totalSpace =  availableAppointmentsOfTheDay[i].totalSpace - 1;
        //         }
        //     }
        // }

        

    useEffect(() => {window.scrollTo(0,0)}, [])
    return (
        <>
            <Header/>
            <AppointmentSection/>
            <AppointmentTable/>
            <Footer/>
        </>

    );
};

export default Appointment;