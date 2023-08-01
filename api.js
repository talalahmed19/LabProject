import axios from 'axios';

const url="http://localhost:3000";

export const Contacts=async(patientData)=>{
  return await  axios.post(`${url}/HospitalManagement`,patientData);
}

export const getContact1=async()=>{
  return await axios.get(`${url}/contact2`);
}

export const Requests=async(patientRequestsInfo)=>{
  return await  axios.post(`${url}/HospitalRequest`,patientRequestsInfo);
}

export const getRequests1=async()=>{
  return await axios.get(`${url}/request2`);
}
export const deleteData=async(id)=>{
  console.log(id);
  return await axios.delete(`${url}/delete/${id}`);
}
export const getUserData = async (id) => {
  return await axios.get(`${url}/Appointment/${id}`);
}

export const editUser = async (Signup, id) => {
  try {

     return await axios.put(`${url}/Edit/${id}`, Signup);
  } catch (error) {

     console.log(error)
  }
}