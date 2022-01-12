import express, { Request, Response } from 'express'
import { product, Product } from '../models/products'
import verifyAuthToken from '../middleWares/auth'


const product_ = new Product()

const index = async (_req: Request, res: Response) => {
  try {
    const products = await product_.index()
    res.json(products)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

const show = async (req: Request, res: Response) => {
  try{
   const result = await product_.show(req.params.id)
   res.json(result)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

const create = async (req: Request, res: Response) => {
    try {
      const productData: product = {
          name: req.body.name,
          price: req.body.price,
          category: req.body.category
        }

        const newProduct = await product_.create(productData)
        res.json(newProduct)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}

const productRoutes = (app: express.Application) => {
  app.get('/products', index)
  app.get('/products/:id', show)
  app.post('/products', verifyAuthToken , create)
}

export default productRoutes