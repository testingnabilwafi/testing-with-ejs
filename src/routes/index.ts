import type { Application, Router } from 'express'
import dashboardRouter from './dashboard.route'

import homeRouter from './home.route'
import productRouter from './product.route'

const _routes: Array<[string, Router]> = [
  ['/', homeRouter],
  ['/api', productRouter],
  ['/dashboard', dashboardRouter]
]

const routes = (app: Application): void => {
  _routes.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
  })
}

export default routes
