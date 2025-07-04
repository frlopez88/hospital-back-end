import {pool} from '../db/cn.js'

export const getDepartments = async (req, res)=>{

    const result = await pool.query(`select * from hospital.departments`)
    return res.json(result.rows)

}

export const postDepartments = async (req, res)=> {

    const body = req.body;
    const sql = ` insert into  hospital.departments (department_name) values ($1)`
    const parameters = [body.department_name]

    const result = await pool.query(sql, parameters)
    return res.json( {message: "Object Created"} )

}

export const putDepartments = async (req, res) =>{

    const department_id = req.params.department_id
    const body = req.body 

    const sql = ` update hospital.departments 
                    set department_name = $1
                    where  department_id = $2`;

    const parameters = [ body.department_name,  department_id]

    const resul = await pool.query (sql, parameters)

    return res.json( {message : "Object Updated"} )

}

export const deleteDeparments = async (req, res) => {

    const department_id = req.params.department_id
    const sql = ` delete from  hospital.departments 
                    where  department_id = $1`;
    const parameters = [department_id]
    const result = pool.query(sql, parameters)

    return res.json( {message : "Object Removed"} )
}