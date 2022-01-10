import con from '../database'

export type order = {
     id?: number;
     user_id: number;
     product_id: number;
     quantity: number;
     status: string;
}

export class Order{
  async show(id: string): Promise<order | string> {
    try {
        const sql = 'SELECT * FROM orders WHERE user_id=($1) AND status=\'active\''
        
        const conn = await con.connect()

        const result = await conn.query(sql, [id])

        conn.release()
      if (!result.rows[0]) {
        return 'No active orders found !';
        }

        return result.rows[0]
    } catch (err) {
            throw new Error(`Could not find order active with user-id: ${id}, Error: ${err}`)
    }
  }

}
