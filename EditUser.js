// import { getUserData,editUser } from "./Service/api";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// function EditUser() {
//     const [Signup, setSignup] = useState({});
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [city, setCity] = useState('');
//     const [state, setState] = useState('');
//     const [zip, setZip] = useState('');

//     const { id } = useParams();

//     useEffect(() => {
//         loadUserDetails();
//     }, [])

//     const loadUserDetails = async () => {
//         const response = await getUserData(id);
//     }
//     const editDetails = async (e) => {
//         setSignup({
//            patientName: name,
//             Email: email,
//             Password: password,
//             City: city,
//             State: state,
//             Zip:zip
//         })
//         console.log(Signup);
//         e.preventDefault();
//         await editUser(Signup, id);
//     }


//     return (


//        <div>
//        <div className="Req">
//     <form>
// <div class="form-row">
// <div class="col-md-20 mb-3">
//   <label for="validationDefault01">Name</label>
//   <input type="text"  class="form-control" onChange={(e)=>setName(e.target.value)} value={name}  placeholder="Name"  required/>
// </div>
// <div class="col-md-20 mb-3">
//   <label for="validationDefault02">Email</label>
//   <input type="Email"  class="form-control" onChange={(e)=>setEmail(e.target.value)} value={email}  placeholder="Email"  required/>
// </div>
// <div class="col-md-20 mb-3">
//   <label for="validationDefaultUsername">Password</label>
//   <div class="input-group">
//     {/* <div class="input-group-prepend">
//       <span class="input-group-text" id="inputGroupPrepend2">@</span>
//     </div> */}
//     <input type="Password"   class="form-control" onChange={(e)=>setPassword(e.target.value)} value={password}  placeholder="Password" aria-describedby="inputGroupPrepend2" required/>
//   </div>
// </div>
// </div>
// <div class="form-row">
// <div class="col-md-20 mb-3">
//   <label for="validationDefault03">City</label>
//   <input type="text"   class="form-control" onChange={(e)=>setCity(e.target.value)} value={city}  placeholder="City" required/>
// </div>
// <div class="col-md-20 mb-3">
//   <label for="validationDefault04">State</label>
//   <input type="text"   class="form-control" onChange={(e)=>setState(e.target.value)} value={state}  placeholder="State" required/>
// </div>
// <div class="col-md-20 mb-3">
//   <label for="validationDefault05">Zip</label>
//   <input type="text"   class="form-control" onChange={(e)=>setZip(e.target.value)} value={zip}  placeholder="Zip" required/>
// </div>
// </div>
// <div class="form-group">

// </div>
// <button class="btn btn-primary" onClick={(e)=>editDetails(e)}  type="submit" className="submit">Submit form</button>
// </form>
//     </div>
//     </div>
//     );
// }

// export default EditUser;


import { getUserData, editUser } from "./Service/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditUser() {
  const [Signup, setSignup] = useState({});
  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
   const [zip, setZip] = useState('');
  // const [program, setProgram] = useState('');
  // const [image, setImage] = useState('');

  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, [])

  const loadUserDetails = async () => {
    const response = await getUserData(id);
  }
  const editDetails = async (e) => {
    setSignup({
      // patientName: name,
      Email: email,
      Password: password,
      City: city,
      Zip: zip,
      // Program: program,
      // Image: image
    })
    console.log(Signup);
    e.preventDefault();
    await editUser(Signup, id);
  }


  return (
    <div>
      <h1 style={{color:"grey",marginLeft:"580px"}}>Edit Details</h1>
      <form style={{marginTop:"40px",marginLeft:"450px"}}>
        {/* <div class="form-row">
           <div class="col-md-20 mb-3">
            <label for="validationDefault01">Name</label>
            <input type="text" class="form-control" style={{width:"500px"}} onChange={(e) => setName(e.target.value)} value={name} placeholder="Name" required />
          </div>
        </div>  */}
         <div class="col-md-20 mb-3">
          <label for="validationDefault02">Email</label>
          <input type="Email" class="form-control" style={{width:"500px"}} onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" required />
        </div>

        <div class="col-md-20 mb-3" style={{width:"500px"}}>
          <label for="validationDefaultUsername">Password</label>
          <div class="input-group">
            {/* <div class="input-group-prepend">
       <span class="input-group-text" id="inputGroupPrepend2">@</span>
    </div> */}
            <input type="Password" class="form-control"  onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" aria-describedby="inputGroupPrepend2" required />
          </div>
        </div>

        <div class="form-row">
          <div class="col-md-20 mb-3">
            <label for="validationDefault03">City</label>
            <input type="text" class="form-control" style={{width:"500px"}} onChange={(e) => setCity(e.target.value)} value={city} placeholder="City" required />
          </div>
        </div>

         <div class="col-md-20 mb-3">
          <label for="validationDefault04">Zip</label>
          <input type="text" class="form-control" style={{width:"500px"}} onChange={(e) => setZip(e.target.value)} value={zip} placeholder="Zip" required />
        </div> 
        {/* <div class="col-md-20 mb-3">
          <label for="validationDefault05">Program</label> */}
          {/* <input type="text" class="form-control" style={{width:"500px"}} onChange={(e) => setProgram(e.target.value)} value={program} placeholder="Program" required /> */}
          {/* <select style={{width:"500px"}} class="form-select" aria-label="Default select example"  onChange={(e) => setProgram(e.target.value)} value={program} placeholder="Program" required>
  <option selected >Select your program from here...</option>
  <option >BSE</option>
  <option>BCS</option>
  <option>BTY</option>
</select>
        </div> */}

        {/* <div class="col-md-20 mb-3">
        <label class="form-label" for="customFile" style={{marginTop:"20px"}}>Upload Image</label>
<input type="file" class="form-control" id="customFile" onChange={(e) => setImage(e.target.value)} value={image} placeholder="Image"/>
        </div> */}

        <button class="btn btn-primary" onClick={(e) => editDetails(e)} type="submit" className="submit">Edit</button>

      </form >
    </div>

   );
}

export default EditUser;