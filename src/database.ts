import dotenv from "dotenv";
import { Pool } from 'pg';

dotenv.config();

const {
    host,
    db_name,
    db_name_test,
    db_user,
    password,
    db_port,
    ENV,
    BB,
    SALT_ROUNDS,
    TOKEN_SEKRET
} = process.env;

let con: Pool = new Pool();
console.log(ENV)
if (ENV === "dev") {
    con = new Pool({
        host: host,
        database: db_name,
        port: parseInt(db_port as string),
        password: password,
        user : db_user
    })
}

if (ENV === "test") {
    con = new Pool({
        host: host,
        database: db_name_test,
        port: parseInt(db_port as string),
        password: password,
        user : db_user
    })
}


export default con;