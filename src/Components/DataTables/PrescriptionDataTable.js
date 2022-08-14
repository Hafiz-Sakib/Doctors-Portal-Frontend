import React, { useContext, useState } from 'react';
import { DataContext } from '../../App';
import PrescriptionModal from '../Dashboard/PrescriptionModal';

const PrescriptionDataTable = () => {
    const ContextData = useContext(DataContext);
    const [selectAppointment, setSelectAppointment] = useState(null);
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const openPrescriptionModal = (apId) => {
        setModalIsOpen(true);
        const selectedAp = ContextData.allBookedAppointments.find(ap => ap._id === apId)
        setSelectAppointment(selectedAp);
    }

    const prescriptedAppointments = ContextData.allBookedAppointments.filter(ap => ap.prescription)
    console.log(selectAppointment);

    let srNo = 1;
    return (
        <>
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Date</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Contact</th>
                <th className="text-secondary text-center" scope="col">Prescription</th>
                </tr>
            </thead>
            <tbody>
                {
                  prescriptedAppointments.map(ap => 

                        <tr>
                        <td>{srNo++}</td>
                        <td>{ap.date}</td>
                        <td>{ap.patientInfo.name}</td>
                        <td>{ap.patientInfo.phone}</td>
                        <td className="text-center">
                            <button onClick={()=> openPrescriptionModal(ap._id)}
                             className="btn btn-primary">View</button>
                        </td>
         
                    </tr>
                    )
                }
            
                
            </tbody>
        </table>

        <PrescriptionModal 
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        selectAppointment={selectAppointment}
        setSelectAppointment={setSelectAppointment}/>
        </>
        
        
    );
};


export default PrescriptionDataTable;