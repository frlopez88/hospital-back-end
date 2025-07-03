import express from 'express'
const app = express();
import { pool } from './db/cn.js';

// add json communication 
app.use(express.json())

app.get('/patients', async(req, res) => {

    const result = await pool.query(`select * from hospital.patients`)

    return res.json(result.rows)

})

app.post('/patients', async(req, res) => {


    const body = req.body;

    const sql = `insert into hospital.patients (name, birth_date) values ($1, $2)`

    const parameters = [body.name, body.birth_date]
    
    const result = await pool.query(sql, parameters)

    return res.json({message:"Object Created"})

})

app.put('/patients/:patient_id',  async(req, res)=>{

    const patient_id = req.params.patient_id;

    const body = req.body

    const sql = `update hospital.patients
                    set name = $1, 
                        birth_date = $2
                where patient_id = $3`;
    
    const parameters = [body.name, body.birth_date, patient_id]

    const result = await pool.query(sql, parameters)

    return res.json({message : "Object Updated"})

} )

app.delete('/patients/:patient_id',  async(req, res)=>{

    const patient_id = req.params.patient_id;

    const sql = `delete from hospital.patients
                where patient_id = $1`;

    const parameters =[patient_id]

    const result = await pool.query(sql, parameters)

    return res.json({message : "Object Removed"})

} )

const port = 4000;

app.listen(port, () => {
    console.log(`server listening in port ${port}`)
})