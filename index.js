import express from 'express'
const app = express();
import { patients } from './routes/patientsRoutes.js';
import { departments } from './routes/departmentRoute.js';

// add json communication 
app.use(express.json())

app.use('/api', patients)
app.use('/api', departments)

const port = 4000;

app.listen(port, () => {
    console.log(`server listening in port ${port}`)
})