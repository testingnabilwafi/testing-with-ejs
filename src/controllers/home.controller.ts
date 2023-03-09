import type { Request, Response } from 'express'

export const index = (req: Request, res: Response) => {
  res.render('index')
}

export const login = (req: Request, res: Response) => {
  res.redirect('/dashboard')
}
