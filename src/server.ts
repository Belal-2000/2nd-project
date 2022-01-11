import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import orderRoutes from './handlers/ordersHandler'
import productRoutes from './handlers/productsHandler'
import usersRoutes from './handlers/userHandler'


const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})


orderRoutes(app)
productRoutes(app)
usersRoutes(app)


app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})

export default app;