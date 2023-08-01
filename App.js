import Reqanapp from './Reqanapp';
import About from './About';
import Login from './Login';
import Contact from './Contact';
import Contact2 from './Contact2';
import { Routes, Route } from "react-router-dom";
import Admin from './Admin';
import Patient from './Patient';
import Accountant from './Accountant';
import Dashboard from './Dashboard';
import EditUser from'./EditUser';
// import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import Appointment from './Appointment';
// import GoogleLogin from 'react-google-login';

// const clientId='714123774000-ah4i1bnol6u0lhgl4q4ntjo2s57bp34e.apps.googleusercontent.com';
function App() {
//   useEffect(() => {
//     const initClient = () => {
//           gapi.client.init({
//           clientId: clientId,
//           scope: ""
//         });
//      };
//      gapi.load('client:auth2', initClient);
//  });
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Req" element={<Reqanapp />} />
        <Route path="/Appointment" element={<Appointment />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact2" element={<Contact2 />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Patient" element={<Patient />} />
        <Route path="/Accountant" element={<Accountant />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/EditUser/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}
export default App;