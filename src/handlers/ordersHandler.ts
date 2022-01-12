import express, { Request, Response } from 'express'
import { order, Order } from '../models/orders'
import verifyAuthToken from '../middleWares/auth'

const orders = new Order()

const show = async (req: Request, res: Response) => {
  try{
  const result = await orders.show(req.params.id)
  res.json(result)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}


const orderRoutes = (app: express.Application) => {
  app.get('/orders/:id', verifyAuthToken , show)
}

export default orderRoutes;