import express from 'express';
const router = express.Router();
import { addDoctor,getAllDoctors } from '../controllers/doctor.js';
// Get all doctors
router.get('/', getAllDoctors);
router.post('/', addDoctor);
export default router;