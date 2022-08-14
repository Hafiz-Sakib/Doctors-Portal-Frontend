import React from 'react';
import './Appointment.css';
import BannerImg from '../../images/banner-img.png';
import ReactCalender from './Calender';
const AppointmentSection = () => {
    return (
        <div className="appointment-section">
            <div className="container">
                
                <div className="row" style={{height:"100vh"}}>
                    <div className="col-md-6  align-self-end">
                        <div className="calender-area pr-md-5 mr-md-5">
                            <h3 className="text-uppercase col-12 mb-5">Appointment</h3>
                            <ReactCalender/>
                        </div>
                    </div>
                    <div className="col-md-6 align-self-center">
                        <img className="img-fluid" src={BannerImg} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default AppointmentSection;