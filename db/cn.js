import { Pool } from "pg";
import dotenv from 'dotenv';
dotenv.config();

export const pool = new Pool({
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    database: process.env.PG_DATABASE, 
    password: process.env.PG_PASSWORD,
    ssl : {
        rejectUnauthorized: false
    }
})