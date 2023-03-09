import { Router } from 'express'
import { index, login } from '../controllers/home.controller'

const homeRouter = Router()

homeRouter.get('/', index)
homeRouter.post('/', login)

export default homeRouter
