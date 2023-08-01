import {  getContact1 } from "./Service/api";
import { useEffect, useState } from 'react';
import Contact from "./Contact";
function Contact2() {
    const [patientData, setpatientData] = useState([]);
    useEffect(() => {
        getContactMessage();

    }, [])

   async function getContactMessage() {
        const result = await getContact1();
        setpatientData(result.data);
    }

    return (
        <div>
            <Contact/>
            <h1 style={{marginLeft:"650px",fontWeight:"bold",color:"grey"}}>Messages</h1>

            <div style={{ marginTop: "150px", marginLeft: "150px", width: "1270px", height: "150vh" ,border:"2px solid black"}}>
                <table class="table">
                    <thead>
                        <tr style={{ color: "grey" }}>
                            <th scope="col" >Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            patientData.map(messages => (
                                <tr>
                                    <td>{messages.patientName}</td>
                                    <td>{messages.Email}</td>
                                    <td>{messages.Subject}</td>
                                    <td>{messages.Message}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Contact2;