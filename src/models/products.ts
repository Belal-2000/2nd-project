import con from '../database'

export type product = {
     id?: number;
     name: string;
     price: number;
     category: string;
}

export class Product {
  async index(): Promise<product[]> {
      try {
          const conn = await con.connect()
          
          const sql = 'SELECT * FROM product'
          
          const result = await conn.query(sql)
          
          conn.release()

      return result.rows 
    } catch (err) {
      throw new Error(`Could not get products. Error: ${err}`)
    }
  }

  async show(id: string): Promise<product | string> {
    try {
        const sql = 'SELECT * FROM product WHERE id=($1)'
        
        const conn = await con.connect()

        const result = await conn.query(sql, [id])

      conn.release()
      
      if (!result.rows[0]) {
        return `No product with id:${id}`;
      }

        return result.rows[0]
    } catch (err) {
            throw new Error(`Could not find product with id: ${id}, Error: ${err}`)
    }
  }

  async create(b: product): Promise<product> {
      try {
          const sql = 'INSERT INTO product (name, price, category) VALUES($1, $2, $3) RETURNING *'
          
          const conn = await con.connect()

          const result = await conn
                .query(sql, [b.name, b.price, b.category])

          const product = result.rows[0]

        conn.release()

        return product
      } catch (err) {
          throw new Error(`Could not create new product , Error: ${err}`)
      }
  }
}
