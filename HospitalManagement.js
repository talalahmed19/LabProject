import express from 'express';
import {  createContact,  getContact } from '../Controllers/HospitalManagement.js';

const router= express.Router(); 

router.get("/",getContact)

router.post("/",createContact);
export default router;