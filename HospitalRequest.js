import express from 'express';
import {  createRequest,  getRequest,deleteUserData,getUserData,editUserData } from '../Controllers/HospitalRequest.js';

const router= express.Router(); 

router.get("/",getRequest)

router.post("/",createRequest);
router.delete("/delete/:id",deleteUserData);
router.get("/:id", getUserData);

router.put("/Edit/:id", editUserData);
export default router;