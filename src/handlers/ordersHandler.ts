import express, { Request, Response } from 'express'
import { order , Order } from '../models/orders'

const orders = new Order()

const show = async (req: Request, res: Response) => {
  const result = await orders.show(req.params.id)
  res.json(result)
}


const orderRoutes = (app: express.Application) => {
  app.get('/orders/:id', show)
}

export default orderRoutes;