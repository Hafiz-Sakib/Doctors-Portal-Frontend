import React, { useContext } from 'react';
import AppointmentCard from './AppointmentCard';
import { useState } from 'react';
import { DataContext, CalenderContext } from '../../App';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Preloader from '../Preloader/Preloader';

Modal.setAppElement('#root')

const AppointmentTable = () => {
    const contextData = useContext(CalenderContext);
    const contextData_2 = useContext(DataContext)
    const [selectAppointment, setSelectAppointment] = useState(null);
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [isBooked, setIsBooked] = useState(false);
    console.log(contextData_2.preLoaderVisibility)

    const date = `${contextData.date.getDate()}-${contextData.date.getMonth() +1}-${contextData.date.getFullYear()}`;

    const  makeBooking = (patientInfo) => {
        setIsBooked(true);
        const apId = selectAppointment.id;
        const time = selectAppointment.visitingHour;
        const dataToStore = {apId , date , time , patientInfo ,status:"Pending" }
        fetch("https://doctors-portal-backend.herokuapp.com/makeBooking",{
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(dataToStore)
        })
        .then(res =>res.json())
        .then(data =>{
            const newAllBooking = [...contextData_2.allBookedAppointments];
            newAllBooking.push(data);
            contextData_2.setAllBookedAppointments(newAllBooking);
        })
        .catch(err => console.log(err))
    }

    const { register, handleSubmit, watch, errors } = useForm()

    const onSubmit = data => {
        console.log(data);
        makeBooking(data)
    }
    const modalController = (apId) => {
        setModalIsOpen(true);
        const selectedAp = contextData_2.allAppointments.find(ap => ap.id === apId);
        if(selectedAp){
            setSelectAppointment(selectedAp)
        }
    }
    return (
        
        <div className="appointments container py-5 mt-5">
            <h3 className="text-primary text-center my-5">Available Appointments on {contextData.date.toLocaleString('default', { month: 'long' })} {contextData.date.getDate()}, {contextData.date.getFullYear()}</h3>
            <div className="row">
                {
                    contextData_2.preLoaderVisibility &&
                    <Preloader/>
                }
                {
                    contextData_2.allAppointments.map(SingleAp => <AppointmentCard data={SingleAp} modalController={modalController} />)
                }
                
            </div>
            
            <Modal  isOpen={modalIsOpen}
             onRequestClose={() => setModalIsOpen(false)} 
             style={{
                 overlay:{
                     backgroundColor:"rgba(130,125,125,0.75)"
                 },
                 content : {
                    top                   : '50%',
                    left                  : '50%',
                    right                 : 'auto',
                    bottom                : 'auto',
                    marginRight           : '-50%',
                    width                 :  '40%',
                    transform             : 'translate(-50%, -50%)'
                  }
             }}
            >
                {
                     isBooked ?
                     <div  className="text-center  py-5 my-5">
                          <FontAwesomeIcon className="text-success" style={{fontSize:"5em"}} icon={faCheckCircle}></FontAwesomeIcon>
                          <h4 className="mt-5 lead">Appointment Request Sent!</h4>
                     </div>
                     
                     :
                     selectAppointment &&
                     <div className="px-4"> 
                        <h4 className="text-primary text-center">{selectAppointment.subject}</h4>
                         <p className="text-center text-secondary  small mb-5">On {contextData.date.toLocaleString('default', { month: 'long' })} {contextData.date.getDate()}, {contextData.date.getFullYear()}</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control"/>
                                {errors.name && <span className="text-danger">This field is required</span>}

                            </div>
                            <div className="form-group">
                                <input type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control"/>
                                {errors.phone && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control"/>
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group row">
                                <div className="col-4">
                                   
                                    <select className="form-control" name="gender" ref={register({ required: true })} >
                                        <option disabled={true} value="Not set">Select Gender</option>
                                        <option  value="Male">Male</option>
                                        <option  value="Female">Female</option>
                                        <option  value="Not set">Other</option>
                                    </select>
                                    {errors.gender && <span className="text-danger">This field is required</span>}

                                </div>
                                <div className="col-4">
                                    <input ref={register({ required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                                    {errors.age && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="col-4">
                                    <input ref={register({ required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                                    {errors.weight && <span className="text-danger">This field is required</span>}
                                </div>
                            </div>
                            
                            <div className="form-group text-right">
                                <button type="submit" className="btn btn-primary">Send</button>
                            </div>
                        </form>
                     </div>
                }
            </Modal>
        </div>
    );
};


export default AppointmentTable;