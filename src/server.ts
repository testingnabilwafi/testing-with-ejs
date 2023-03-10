import express from 'express'
import logger from './utils/logger'
import bodyParser from 'body-parser'
import cors from 'cors'

import type { Application, NextFunction, Request, Response } from 'express'

import routes from './routes'
import path from 'path'

const app: Application = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/public', express.static(path.join(__dirname, '/public')))
app.use(cors())
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

routes(app)

app.listen(process.env.PORT ?? 3000, () => {
  logger.info('Server is running on port 3000')
})
