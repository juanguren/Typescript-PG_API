
import { Pool, QueryResult } from "pg";
import connectionPool from '../../pg_init';

const pool = new Pool(connectionPool);

interface userEntity {
    age: String;
    email: Text;
    name: String;
    username: String;
    isLogged?: Boolean;
}

const getUser = () =>{
    return pool.query('SELECT * FROM USERS');
}

const createUser = (params: userEntity) =>{
    return pool.query(
        `INSERT INTO users VALUES (age, email, name, username)
         VALUES ($1, $2, $3, $4) RETURNING *`),
         params;
}

export default {
    getUser,
    createUser
}