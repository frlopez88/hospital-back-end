import {pool} from '../db/cn.js'

export const postPatients = async (req, res)=>{

    const body = req.body;
    const sql = `insert into hospital.patients (name, birth_date) values ($1, $2)`
    const parameters = [body.name, body.birth_date]
    const result = await pool.query(sql, parameters)
    return res.json({message:"Object Created"})

}

export const getPatients = async(req, res) => {

    const result = await pool.query(`select patient_id, 
                                            name, 
                                            to_char(birth_date, 'yyyy-mon-dd')  birth_date
                                    from hospital.patients`)
    return res.json(result.rows)

}

export const putPatients = async(req, res)=>{

    const patient_id = req.params.patient_id;
    const body = req.body
    const sql = `update hospital.patients
                    set name = $1, 
                        birth_date = $2
                where patient_id = $3`;
    const parameters = [body.name, body.birth_date, patient_id]
    const result = await pool.query(sql, parameters)

    return res.json({message : "Object Updated"})

}

export const deletePatients = async(req, res)=>{

    const patient_id = req.params.patient_id;
    const sql = `delete from hospital.patients
                where patient_id = $1`;
    const parameters =[patient_id]
    const result = await pool.query(sql, parameters)
    return res.json({message : "Object Removed"})

}