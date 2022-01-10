import jwt from 'jsonwebtoken'
import express, { Request, Response } from 'express'


const verifyAuthToken = (req: Request, res: Response, next: express.NextFunction) => {
    try {
        const authorizationHeader = req.headers.authorization as string
        const token = authorizationHeader.split(' ')[1]
        const secret = process.env.TOKEN_SEKRET as string;
        const decoded = jwt.verify(token, secret)

        next()
    } catch (error) {
        console.log(error)
        res.status(401)
        res.json('Access denied , invalid token')
    }
}

export default verifyAuthToken;