import con from '../database'
import bcrypt from 'bcrypt'

export type user = {
     id?: number;
     firstName: string;
     lastName: string;
     password: string;
}

export class User {
  async index(): Promise<user[]> {
      try {
          const conn = await con.connect()
          
          const sql = 'SELECT * FROM users'
          
          const result = await conn.query(sql)
          
          conn.release()

      return result.rows 
    } catch (err) {
      throw new Error(`Could not get users. Error: ${err}`)
    }
  }

  async show(id: string): Promise<user | string> {
    try {
        const sql = 'SELECT * FROM users WHERE id=($1)'
        
        const conn = await con.connect()

        const result = await conn.query(sql, [id])

        conn.release()

      if (!result.rows[0]) {
          return `There is no user with id:${id}`;
        }
      
        return result.rows[0]
    } catch (err) {
            throw new Error(`Could not find user with id: ${id}, Error: ${err}`)
    }
  }

  async create(u: user): Promise<user> {
      try {
          const sql = 'INSERT INTO users(firstName, lastName, password) VALUES($1, $2, $3) RETURNING *'
          
        const conn = await con.connect()
        
        const hash = bcrypt.hashSync(
          u.password + process.env.BB, 
          parseInt(process.env.SALT_ROUNDS as string)
       );

          const result = await conn
                .query(sql, [u.firstName, u.lastName, hash])

        const userN = result.rows[0]

        conn.release()

        return userN
      } catch (err) {
          throw new Error(`Could not create new user , Error: ${err}`)
      }
  }
}
