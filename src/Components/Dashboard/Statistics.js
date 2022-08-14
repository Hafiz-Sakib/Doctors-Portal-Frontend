import React from 'react';
import SingleStatistic from './SingleStatistic';
import { useContext } from 'react';
import { DataContext } from '../../App';

const Statistics = () => {
    const ContextData = useContext(DataContext);
    const total = ContextData.allBookedAppointments.length;
    const pending =  ContextData.allBookedAppointments.reduce((accu , curr) => {
        if(curr.status === "Pending"){
                accu += 1;
        }
        return accu;

    },0) 
    const date = new Date();
    const formatedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    const todays =  ContextData.allBookedAppointments.reduce((accu , curr) => {
        if(curr.date === formatedDate){
            accu += 1;
        }
        return accu;
    },0) 
    return (
        <div className="row my-5">
            <SingleStatistic classToAdd="bg-danger" data={{title: "Pending Appointments" , count:pending}}/>
            <SingleStatistic classToAdd="bg-info" data={{title: "Today’s Appointments" , count:todays}}/>
            <SingleStatistic classToAdd="bg-success" data={{title: "Total Appointments" , count:total}}/>
            <SingleStatistic classToAdd="bg-warning" data={{title: "Total  Patients" , count:ContextData.allPatients.length}}/>
        </div>
    );
};

export default Statistics;