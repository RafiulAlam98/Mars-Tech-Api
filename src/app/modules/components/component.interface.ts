import { Model } from 'mongoose'

export type IStatus = 'In Stock' | 'Out of stock'
type IFeatures = {
  brand: string
  model: string
  specification: string
  types?: string
  port?: string
  resolution?: string
  voltage?: string
}

export type IComponents = {
  img: string
  name: string
  category: string
  status: IStatus
  price: number
  description: string
  features: IFeatures
  individualRating: string
  averageRating: string
  reviews: string
}

export type ModelComponent = Model<IComponents>
