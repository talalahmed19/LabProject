import{Link} from "react-router-dom";
import { useState } from "react";
import {useRef} from 'react';
import "./Req.css";
import Menu from "./Menu";
import { Requests } from "./Service/api";
function Reqanapp(){

  const [patientRequestsInfo,setpatientRequestsInfo]=useState({
    patientName:"",
    Email:"",
    Password:"",
    City:"",
    CGPA:"",
    Program:"",
    Image:""
  })
//   const {patientName,Email,Subject,Message}=patientData;
  const handleChange=(e)=>{
    setpatientRequestsInfo({...patientRequestsInfo,[e.target.name]:[e.target.value]})
  }
async  function addRequest1(e){
    e.preventDefault();
    
    await Requests(patientRequestsInfo);
  }

   const refr=useRef(null);
   const refren=useRef(null);
   const refrenc=useRef(null);
   const refrence=useRef(null);
   const refrnce=useRef(null);
   const refre=useRef(null);
   function HandleChange(){
     refr.current.focus();
     refr.current.style.color="blue";
     refren.current.style.color="blue";
     refrenc.current.style.color="blue";
     refrence.current.style.color="blue";
     refrnce.current.style.color="blue";
     refre.current.style.color="blue";
  
   }

  const [cards, set] = useState([
     {
         title: 'Appointment # 1',
         text:'I have appointment with Dr Jack',
     },
     {
       title: 'Appointment # 2',
      text:'I have appointment for E.N.T Specialist',
   },
   ])
   function handleDelete(title) {
    const updateCard = cards.filter((card) => card.title !==title);
     set(updateCard);
 }
 
    return(
      <div>
        <Menu/>
      <div className="Req">
        <form>
  <div class="form-row">
    {/* <div class="col-md-20 mb-3">
      <label for="validationDefault01">Username</label>
      <input type="text" ref={refr}  class="form-control" onChange={(e)=>handleChange(e)} name="patientName" placeholder="Username"  required/>
    </div> */}
    <div class="col-md-20 mb-3">
      <label for="validationDefault02">Email</label>
      <input type="Email" ref={refren}  class="form-control" onChange={(e)=>handleChange(e)} name="Email" placeholder="Email"  required/>
    </div>
    <div class="col-md-20 mb-3">
      <label for="validationDefaultUsername">Password</label>
      <div class="input-group">
        {/* <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend2">@</span>
        </div> */}
        <input type="Password" ref={refrenc}  class="form-control" onChange={(e)=>handleChange(e)} name="Password" placeholder="Password" aria-describedby="inputGroupPrepend2" required/>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-20 mb-3">
      <label for="validationDefault03">City</label>
      <input type="text" ref={refrence}  class="form-control" onChange={(e)=>handleChange(e)} name="City" placeholder="City" required/>
    </div> 
     {/* <div class="col-md-20 mb-3">
      <label for="validationDefault04">CGPA</label>
      <input type="text" ref={refrnce}  class="form-control" onChange={(e)=>handleChange(e)} name="CGPA" placeholder="CGPA" required/>
    </div>  */}
    <div class="col-md-20 mb-3">
      <label for="validationDefault05">Zip</label>
      <input type="text" ref={refre}  class="form-control" onChange={(e)=>handleChange(e)} name="Zip" placeholder="Zip" required/>
    </div>
    {/* <label for="validationDefault03">Program</label>
  <select class="form-select" aria-label="Default select example" onChange={(e)=>handleChange(e)} name="Program">
  <option selected>Select your program from here...</option>
  <option >BSE</option>
  <option>BCS</option>
  <option>BTY</option>
</select> */}

  </div>
  <div class="form-group">
    
  </div>
  {/* <label class="form-label" for="customFile" style={{marginTop:"20px"}}>Upload Image</label>
<input type="file" class="form-control" id="customFile" onChange={(e)=>handleChange(e)} name="Image"/>*/}
 <button class="btn btn-primary" onClick={(e)=>addRequest1(e)}  type="submit" className="submit" style={{marginTop:"20px"}}>Submit</button> 

</form>
<h2 style={{marginTop:'80px'}}>Appointments</h2>
<div style={{marginTop:'30px',width:'500px',display:'flex',flex:'wrap'}}>
{
                cards.map((t) => (
          
<div class="card w-50" style={{marginLeft:'10px'}}>
  <div class="card-body">
    <h5 class="card-title">{t.title}</h5>
    <p class="card-text">{t.text}</p>
  </div>
  <div style={{marginLeft:'150px',marginTop:'-20px'}}>
<button style={{width:'70px',backgroundColor:'grey',color:'white'}} onClick={() =>handleDelete(t.title)}>Delete</button>
</div>
</div>
                ))
                }
</div>




</div>
</div>
    );
}
export default Reqanapp;



