import {  getRequests1 } from "./Service/api";
import { useEffect, useState } from 'react';
import { deleteData } from "./Service/api";
import Patient from "./Patient";
import { useNavigate } from "react-router-dom";
function Appointment() {
    const [patientRequestsInfo, setpatientRequestsInfo] = useState([]);
    useEffect(() => {
        getRequestMessage();
  
    }, [])
  
   async function getRequestMessage() {
        const result = await getRequests1();
        setpatientRequestsInfo(result.data);
        console.log(result.data)
    }
  const deleteItem=async(id)=>{
    await deleteData(id);
  }
const navigate=useNavigate();
    return (
         <div>
            {/* <Patient/> */}
<h1 style={{marginLeft:"650px",fontWeight:"bold",color:"grey"}}>Appointments</h1>

<div style={{ marginTop: "40px", marginLeft: "150px", width: "1270px", height: "150vh" ,border:"5px solid black"}}>
    <table class="table">
        <thead>
            <tr style={{ color: "grey" }}>
            <th scope="col">Email</th>
                <th scope="col" >Password</th>
                 {/* <th scope="col">Email</th> */}
                <th scope="col">City</th>
                 {/* <th scope="col">City</th> */}
                <th scope="col">Zip Code</th>
                {/* <th scope="col">Program</th>
                <th scope="col">CGPA</th> */}
                
                <th scope="col">Delete</th>
                <th scope="col">Update</th>
            </tr>
        </thead>
        <tbody>
            {
                patientRequestsInfo.map(messages => (
                    <tr>
                        {/* <td>{messages.Image}</td> */}
                        {/* <td>{messages.patientName}</td> */}
                         <td>{messages.Email}</td>
                        <td>{messages.Password}</td>
                        <td>{messages.City}</td> 
                        <td>{messages.Zip}</td>
                        {/* <td>{messages.Program}</td> */}
                        
                        <td><button onClick={()=>deleteItem(messages._id)}>Delete</button></td>
                        <td><button onClick={()=>navigate(`/EditUser/${messages._id}`)}>Update</button></td>
                    </tr>
                ))
            }
        </tbody>
    </table>
</div>
    </div> 
    );
}

export default Appointment;