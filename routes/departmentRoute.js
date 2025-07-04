import express from 'express'
export const departments = express.Router()
import { getDepartments, postDepartments, putDepartments, deleteDeparments } 
from '../controllers/departmentController.js'

departments.get('/departments', getDepartments)
departments.post('/departments', postDepartments)
departments.put('/departments/:department_id', putDepartments)
departments.delete('/departments/:department_id', deleteDeparments)