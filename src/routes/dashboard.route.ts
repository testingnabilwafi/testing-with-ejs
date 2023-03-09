import { Router } from 'express'
import { index } from '../controllers/dashboard.controller'

const dashboardRouter = Router()

dashboardRouter.get('/', index)

export default dashboardRouter
