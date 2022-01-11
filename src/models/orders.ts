import con from '../database'

export type order = {
     id?: number;
     user_id: number;
     product_id: number;
     quantity: number;
     status: string;
}

export class Order{
  async show(id: string): Promise<order[] | string> {
    try {
      const sql = 'SELECT orders.status, orders.user_id , product.name , product.price , product.category FROM ((prods_in_order LEFT JOIN orders ON orders.id = prods_in_order.order_id) INNER JOIN product on product.id = prods_in_order.product_id) where orders.user_id =$1 and orders.status =\'active\''

        const conn = await con.connect()

        const result = await conn.query(sql, [id])

        conn.release()
      if (!result.rows[0]) {
        return 'No active orders found with user_id ' + id + ' !';
        }

        return result.rows
    } catch (err) {
            throw new Error(`Could not find order active with user-id: ${id}, Error: ${err}`)
    }
  }

}
