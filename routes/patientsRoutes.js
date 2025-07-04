import express from 'express'
export const patients = express.Router()
import { getPatients , postPatients, putPatients, deletePatients } 
from '../controllers/patientsController.js'

patients.get('/patients',getPatients);
patients.post('/patients', postPatients );
patients.put('/patients/:patient_id', putPatients);
patients.delete('/patients/:patient_id', deletePatients);
