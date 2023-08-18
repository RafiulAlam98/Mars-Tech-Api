import { Schema, model } from 'mongoose'
import { IComponents, ModelComponent } from './component.interface'
import { componentStatus } from './component.constant'

const componentSchema = new Schema<IComponents>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  img: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  individualRating: {
    type: String,
    required: true,
  },
  averageRating: {
    type: String,
    required: true,
  },
  reviews: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: componentStatus,
  },
  features: {
    required: true,
    type: {
      brand: {
        type: String,
        required: true,
      },
      model: {
        type: String,
        required: true,
      },
      specification: {
        type: String,
        required: true,
      },
      types: {
        type: String,
        required: true,
      },
      port: {
        type: String,
      },
      resolution: {
        type: String,
      },
      voltage: {
        type: String,
      },
    },
  },
})

export const Component = model<IComponents, ModelComponent>(
  'component',
  componentSchema,
)
