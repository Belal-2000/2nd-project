import express, { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { user, User } from '../models/users'
import verifyAuthToken from '../middleWares/auth'


const user_ = new User()

const index = async (_req: Request, res: Response) => {
  try{
  const users = await user_.index()
  res.json(users)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

const show = async (req: Request, res: Response) => {
  try{
  const result = await user_.show(req.params.id)
   res.json(result)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

const create = async (req: Request, res: Response) => {
    try {
        const userData: user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password
        }

      const newUser = await user_.create(userData)

      const secret = process.env.TOKEN_SEKRET as string
      const token = jwt.sign({ user: newUser }, secret)
      
      res.json(token)

    } catch (err) {      

        res.status(400)
        res.json(err)
    }
}

const usersRoutes = (app: express.Application) => {
  app.get('/users', verifyAuthToken , index)
  app.get('/users/:id', verifyAuthToken , show)
  app.post('/users', create)
}

export default usersRoutes