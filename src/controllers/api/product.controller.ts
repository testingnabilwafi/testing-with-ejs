import type { Request, Response } from 'express'

const product = [
  {
    name: 'Sepatu',
    price: 15000
  },
  {
    name: 'Sendal',
    price: 12000
  },
  {
    name: 'Jaket',
    price: 10000
  }
]

export const index = (req: Request, res: Response) => {
  res.status(200).json(product)
}
