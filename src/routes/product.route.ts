import { Router } from 'express'
import { index } from '../controllers/api/product.controller'

const productRouter = Router()

productRouter.get('/', index)

export default productRouter
